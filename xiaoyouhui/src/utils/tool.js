/**
 * Created by qin on 2018/8/8.
 */

let tool = {};

// SESSION & LOCAL
// ['session', 'local'].forEach(type => {
//     let v = window[type + 'Storage'];
//     let obj = {
//         get(key) {
//             return v.getItem(key);
//         },
//         set(key, value) {
//             v.setItem(key, value);
//         },
//         clear(key) {
//             /**
//              * 清空所有缓存，或单个，或批量删除
//              * @param key NULL|String|Array
//              * */
//             if (tool.utils.isEmpty(key)) {
//                 v.clear();
//             } else {
//                 if (tool.utils.isString(key)) {
//                     key = key.split(',');
//                 }
//                 if (tool.utils.isArray(key)) {
//                     key.forEach(item => {
//                         item = tool.utils.trim(item);
//                         item && v.removeItem(item);
//                     });
//                 }
//             }
//         }
//     };

//     tool[type] = obj;
// });

//工具
tool.utils = (() => {
    let Type = {},
        utils = {
            _isType: function (type) {
                if (!Type[type]) {
                    Type[type] = function (obj) {
                        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
                    };
                }

                return Type[type];
            },
            isArray: function (obj) {
                return utils._isType('Array')(obj);
            },
            isString: function (obj) {
                return utils._isType('String')(obj);
            },
            isBoolean: function (obj) {
                return utils._isType('Boolean')(obj);
            },
            isFunction: function (obj) {
                return utils._isType('Function')(obj);
            },
            isDate: function (obj) {
                return utils._isType('Date')(obj);
            },
            isNumber: function (obj) {
                return utils._isType('Number')(obj);
            },
            isNaN: function (obj) {
                return obj !== obj;
            },
            isNull: function (obj) {
                return obj === null;
            },
            isUndefined: function (obj) {
                return obj === void 0;
            },
            isNumeric: function (obj) {
                return obj - parseFloat(obj) >= 0;
            },
            isPlainObject: function (obj) {
                return obj && typeof obj === "object" && Object.getPrototypeOf(obj) === Object.prototype;
            },
            isEmpty: function (obj) {
                return utils.isNull(obj) || utils.isUndefined(obj) || utils.isString(obj) && obj === "";
            },
            phoneRule: function (countryCode) {
                let rules = {
                    '+60': {
                        pattern: /^[01]\d{8,10}$/,
                        length: 11
                    },
                    '+65': {
                        pattern: /^[89]\d{7}$/,
                        length: 8
                    },
                    '+86': {
                        pattern: /^(13|14|15|17|18|19)\d{9}$/,
                        length: 11
                    },
                    '+852': {
                        pattern: /^[56789]\d{7}$/,
                        length: 8
                    }
                };

                return rules['+' + countryCode];
            },
            isPhone: function (countryCode, phone) {
                let rule = this.phoneRule(countryCode);
                return rule ? rule.pattern.test(phone) : true;
            },
            isCNPhone:function(phone){
                return /^(13|14|15|17|18|19)\d{9}$/.test(phone)
            },
            isPassword: function (pwd) {
                // 6-16 数字 字母 特殊字符
                return /\S{6,16}/.test(pwd);
            },
            // 证件号码，字母+数字，最长40个
            isIdentity: function (identity) {
                return /^[0-9a-zA-Z]{8,40}$/.test(identity);
            },
            //身份证号（18位）正则
            isidCard: function (isidCard) {
                return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(isidCard);
            },
            // 邮箱地址验证
            isEmail: function(email) {
                return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
            },
            // 银行卡号验证
            isBankCard(str) {
                str = str.replace(/\s/g, '');
                return /^[1-9][0-9]{14,29}$/.test(str);
            },
            /**
             * 获取相隔几天后的日期
             * @method getDateByDaysApart
             * @param date {Date}
             * @param number {number}
             * @return Date
             * @example
             *   var threeDaysLater = utils.getDateByDaysApart(new Date(), 3);
             */
            getDateByDaysApart: function (date, number) {
                return new Date(date.getTime() + 60 * 60 * 1000 * 24 * number);
            },
            /**
             * 去除字符串两边的空格
             * @method trim
             * @param str {string}
             * @return string
             */
            trim: function (str) {
                if (!utils.isString(str)) {
                    str = String(str);
                }

                if (utils.isFunction(String.prototype.trim)) {
                    return String.prototype.trim.call(str);
                } else {
                    return str.replace(/(^\s*)|(\s*$)/g, '');
                }
            },
            /**
             * 遍历数组和对象属性
             * @method forEach
             * @param data {object|array}
             * @param callback {function}
             */
            forEach: function (data, callback) {
                if (!utils.isFunction(callback)) {
                    throw new Error("调用utils.forEach() callback参数错误");
                }

                if (utils.isArray(data)) {
                    data.forEach(callback);
                } else if (utils.isPlainObject(data)) {
                    Object.keys(data).forEach(function (key) {
                        callback.call(data, data[key], key, data);
                    });
                } else {
                    throw new Error("调用utils.forEach() data参数错误");
                }
            },
            /**
             * 获取url上query参数，没匹配到返回null
             * @method getUrlParam
             * @param name {string}
             * @return string|null
             */
            getUrlParam: function (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            },
            /**
             * 给url设置params参数
             * @method setUrlParam
             * @param params {object}
             * @param url {string} 不传默认为当前地址
             * @return string
             */
            setUrlParam: function (params, url) {
                if (!utils.isPlainObject(params)) {
                    throw new Error("调用utils.setUrlParam()参数错误");
                }

                url = url || window.location.href;
                var noParam = url.lastIndexOf("?") === url.length - 1;
                var queryStr = "";

                utils.forEach(params, function (val, key) {
                    queryStr += (noParam ? "" : "&") + key + "=" + encodeURIComponent(val);
                });

                if (queryStr != "") {
                    url += noParam ?  "&" : "?";
                    url += queryStr;
                }

                return url;
            },
            // 获取当前系统时间戳
            getUnixTime() {
                return parseInt(new Date().getTime() / 1000);
            },
            // 获取当前系统日期
            getUnixDate (){
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate;
                return currentdate;
            },
            /***
             * 中国标准日期格式=> 2017-05-17 10:38:06
             * @param date
             * @returns {string}
             */
            formatDate: function (date, fmt) {
                if (!utils.isString(date) && !utils.isDate(date)) {
                    return "";
                }

                if (utils.isString(date)) {
                    date = date.replace("T", " ");
                    date = utils.parseDate(date);

                    if (!date) {
                        return "";
                    }
                }

                var o = {
                    "M+": date.getMonth() + 1, // 月份
                    "d+": date.getDate(), // 日
                    "h+": date.getHours(), // 小时
                    "m+": date.getMinutes(), // 分
                    "s+": date.getSeconds()
                    // 秒
                };
                fmt = fmt || "yyyy-MM-dd hh:mm:ss";

                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "")
                        .substr(4 - RegExp.$1.length));
                }

                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                            : (("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return fmt;
            },
            /**
             * 将obj属性并入target对象中，默认不覆盖
             * @method assign
             * @param target {object} 目标对象
             * @param obj {object}
             * @param bCover {boolean} 是否覆盖
             */
            assign: function (target, obj, bCover, bDepth) {
                if (!this.isPlainObject(target) || !this.isPlainObject(obj)) {
                    throw new Error("调用utils.assign()参数错误");
                }

                bCover = !!bCover;
                bDepth = !!bDepth;

                var props = Object.keys(obj);
                for (var i = 0, len = props.length; i < len; i++) {
                    if (target.hasOwnProperty(props[i]) && !bCover) {
                        continue;
                    }

                    if (bDepth && this.isPlainObject(obj[props[i]])) {
                        target[props[i]] = this.isPlainObject(target[props[i]]) ? target[props[i]] : {};
                        this.assign(target[props[i]], obj[props[i]], bCover, bDepth);
                    } else {
                        target[props[i]] = obj[props[i]];
                    }
                }

                return target;
            },
            /**
             * 下载文件
             * @method downloadFile
             * @param src {string}
             */
            downloadFile: function (src) {
                if (src) {
                    if (window.parent && window.parent.open) {
                        window.parent.open(src, "_blank");
                    } else {
                        window.open(src, "_blank");
                    }
                }
            },
            /**
             * 从data中查找数据
             * @param.data Array
             * @param.key String
             * */
            findDataByValue(data, value, key) {
                let len = data.length;
                let i;
                if (len > 0 && !this.isEmpty(value)) {
                    for (i = 0; i < len; i++) {
                        if (this.isPlainObject(data[i]) && !this.isEmpty(key)) {
                            if (data[i][key] === value) {
                                return data[i];
                            }
                        } else if (data[i] === value) {
                            return data[i];
                        }
                    }
                }

                return null;
            },
            /**
             * UTC时间转成当地时间
             * */
            utcToLocalTime(date, fmt) {
                if (this.isString(date)) {
                    date = date.replace(/\-/g, '/');
                    date = new Date(date);
                }

                if (date instanceof Date) {
                    let [year, month, day, hour, minutes, seconds, ms] = [
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                        date.getHours(),
                        date.getMinutes(),
                        date.getSeconds(),
                        date.getMilliseconds()
                    ];
                    let utc = Date.UTC(year, month, day, hour, minutes, seconds, ms);

                    return this.formatDate(new Date(utc), fmt);
                }

                return '';
            },
            // 截取日期字符串长度
            parseDateTimeStr(str, len) {
                str = str || '';
                str = str.toString();
                len = len || 19;

                return str.length > 19 ? str.substr(0, len) : str;
            },
            // 替换html中的style属性
            clearCssStyle(html) {
                if (html) {
                    html = html.toString();
                    return html.replace(/(style="[^<>]*")+?/ig, "");
                }

                return "";
            },
            /**
             * 计算两个时间的时间差
             * @param date1 String | Date, 必须项，缺少时会返回null
             * @param date2 String | Date, 默认取当前时间
             * return miseconds > 0,
             * */
            dateDifference(date1, date2) {
                if (this.isEmpty(date1)) {
                    return null;
                }

                date2 = date2 || new Date();

                if (this.isString(date1)) {
                    date1 = date1.replace(/\-/g, "/");
                    date1 = new Date(date1);
                }

                if (!date1 instanceof Date) {
                    return null;
                }

                if (this.isString(date2)) {
                    date2 = date2.replace(/\-/g, "/");
                    date2 = new Date(date2);
                }

                if (!date2 instanceof Date) {
                    return null;
                }

                return date1.getTime() - date2.getTime();
            },
            // 格式化输入金额
            parseMoneyInput(money, decimal) {
                if (!tool.utils.isEmpty(money)) {
                    money = money.toString().replace(/[^0-9.]/g, '').replace(/^0+/, '0').replace(/\.+/g, '.');
                    if (money) {
                        let arr = money.split('.');
                        if (arr.length > 1) {
                            // 小数点符号前，无数字时前置补零
                            arr[0] = arr[0] === '' ? '0' : arr[0];
                            arr[1] = arr[1].substr(0, tool.utils.isNumeric(decimal) && decimal >= 0 ? decimal : 2);
                            return arr[0] + '.' + arr[1];
                        }
                    }
                }
    
                return money;
            },
        };

    return utils;
})();

//常量
tool.const = {
    // 请求方式
    post: "POST",
    get: "GET",
    put: "PUT",
    delete: "DELETE",
    head: "HEAD",
    options: "OPTIONS",
    patch: "PATCH",
    // 数据类型
    array: 'Array',
    object: 'Object',
    boolean: 'Boolean',
    function: 'Function',
    string: 'String',
    number: 'Number',
    date: 'Date',
    // 参数类型
    body: 'body',
    path: 'path',
    query: 'query',
    // promise状态
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
};

export default tool;
