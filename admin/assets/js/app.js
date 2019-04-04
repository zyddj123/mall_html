let token = docCookies.getItem("token");
if (!token) window.location.href = '/login/login.html';

/**
 * ajax的二次封装  myJsonp
 * 方便token传输使用
 */

(function () {
    /**
     * @param opts
     */
    function myJsonp(opts) {
        this.url = opts.url;
        this.data = opts.data || {};
        this.Type = opts.Type || "GET";
        this.dataType = opts.dataType || "jsonp";
        this.async = opts.async || true;
        this.contentType = opts.contentType == undefined ? "application/x-www-form-urlencoded" : opts.contentType;
        this.processData = opts.processData == undefined ? true : opts.processData;
        this.success = opts.success;
        this.error = opts.error;
        this.init();
    }

    //初始化
    myJsonp.prototype.init = function () {
        var self = this;
        //将token放入data对象
        self.data.token = token;
        $.ajax({
            url: self.url,
            data: self.data,
            type: self.Type,
            dataType: self.dataType,
            async: self.async,
            contentType: self.contentType,
            processData: self.processData,
            success: self.success,
            error: self.error
        });
    };
    window.myJsonp = myJsonp;
    return this;
})();