function tow(n) {
                return n >= 0 && n < 10 ? '0' + n : '' + n;
            }
            function getDate() {
                var oDate = new Date();
                var oldTime = oDate.getTime();
                var newDate = new Date('2023/6/7 09:00:00');
                var newTime = newDate.getTime();
                if(newTime <= oldTime){
                    document.getElementById("p").innerHTML = '已经开始';
                    return;
                }
                var second = Math.floor((newTime - oldTime) / 1000);
                var day = Math.floor(second / 86400);
                second = second % 86400;
                var hour = Math.floor(second / 3600);
                second %= 3600;
                var minute = Math.floor(second / 60);
                second %= 60;
                var str = '仅剩 ' + tow(day) + ' 天 ' + tow(hour) + ' 小时 '
                    + tow(minute) + ' 分钟 '
                    + tow(second) + ' 秒 ';
                document.getElementById("p").innerHTML = str;
            }
            getDate();
            setInterval(getDate, 500);
