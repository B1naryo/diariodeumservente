<script>
        var terminal = document.getElementById("terminal");
        var text = "تم مسح الكمبيوتر ..............................................................................................\n";
        text += "البحث عن شل كود ................................................\n";
        text += "العثور على شل كود!\n";
        text += "تنفيذ شل كود ..................................................................................\n";
        text += "تم تنفيذ شل كود بنجاح!\n";
        text += "حقن الحمولة.......................................................................................\n";
        text += "تم تنفيذ الحمولة!\n";
        text += "الكمبيوتر المصاب!\n";
        text += "في انتظار الاتصال .................................................................................\n";
        text += "تم تأسيس الاتصال\n";
        var speed = 10;
        var i = 0;

        function typeEffect() {
            if (i < text.length) {
                terminal.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeEffect, speed);
            } else {
                setTimeout(function() {
                    window.location.href = "home.html";
                }, 1000); // Redireciona para index.html após 1 segundo
            }
        }

        typeEffect();
    </script>
