OC.L10N.register(
    "stt_whisper",
    {
    "Whisper Speech-To-Text" : "Whisper konuşmadan yazıya",
    "Speech-To-Text provider running OpenAI Whisper locally" : "Yerel olarak OpenAI Whisper çalıştıran konuşmayı metne dönüştürücü",
    "Speech-To-Text provider running OpenAI Whisper locally\n\nThe models run completely on your machine. No private data leaves your servers.\n\nRequires:\n\n * Architecture: x86_64\n * OS: Linux\n\nAfter installing this app you will need to run\n\n    occ stt_whisper:download-models [model-name]\n\nwhere [model-name] is one of\n\n * small\n * medium (default)\n * large" : "Yerel olarak OpenAI Whisper çalıştıran konuşmayı metne dönüştürücü\n\nModeller tamamen aygıtınızda çalışır. Herhangi bir kişisel veri sunucularınızdan ayrılmaz.\n\nGereksinimler:\n\n* Mimari: x86_64\n* İşletim sistemi: Linux\n\nBu uygulamayı kurduktan sonra çalıştırmanız gerekecek\n\nocc stt_whisper:download-models [model-adı]\n\nburada [model-adı] şunlardan biridir:\n\n* small\n* medium (varsayılan)\n* large",
    "Status" : "Durum",
    "Machine learning models have been downloaded successfully." : "Makine öğrenmesi modelleri indirildi.",
    "The machine learning models still need to be downloaded (see below)." : "Makine öğrenmesi modellerinin indirilmesi gerekiyor (aşağıya bakın).",
    "Could not execute the ffmpeg executable. You may need to set the path to a working executable manually. (See below.)" : "FFmpeg dosyası yürütülemedi. Çalışan bir dosyanın yolunu el ile ayarlamanız gerekebilir (aşağıya bakın).",
    "Could not execute the whisper executable. You may need to compile whisper yourself for it to run on this server's processor architecture." : "Whisper dosyası yürütülemedi. Bu sunucunun işlemci mimarisinde çalışması için Whisper dosyasını sizin derlemeniz gerekebilir.",
    "It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work." : "Görünüşe göre sunucu işlemciniz AVX komutlarını desteklemiyor. Bu uygulama AVX komutları olmadan çalışamaz.",
    "Background Jobs are not executed via cron. This app requires background jobs to be executed via cron." : "Arka plan görevleri cron zamanlanmış görevi ile yürütülmüyor. Bu uygulama için arka plan görevlerinin cron ile yürütülmesi gereklidir.",
    "The app was installed successfully and will transcribe files in background processes on request." : "Uygulama kuruldu ve istek üzerine dosyaları arka plan işlemlerinde dönüştürecek.",
    "Scheduled transcription Jobs: {scheduled}" : "Zamanlanmış dönüştürme işlemleri: {scheduled}",
    "Transcription job currently running" : "Çalışan dönüştürme işlemi",
    "No transcription job currently running" : "Çalışan bir dönüştürme işlemi yok",
    "Whisper" : "Whisper",
    "Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:" : "Konuşmayı metne dönüştürmek için kullanılacak makine öğrenmesi modelini seçin. Model ne kadar büyük olursa, bellek, işlemci ve zaman gibi daha fazla kaynağa gerek duyulur. Bununla birlikte, model ne kadar küçük olursa, sonuçlar o kadar az doğru olur. Bir modeli kullanmak için şu komutu kullanarak indirmeniz gerekir:",
    "Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)" : "Küçük model (small, ~1GB bellek, ~1x kayıt süresi, ~%10-20 sözcük hata oranı)",
    "Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)" : "Orta model (medium, ~2GB bellek, ~3x kayıt süresi, ~%7-15 sözcük hata oranı)",
    "Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)" : "Büyük model (large, ~3,5GB bellek, ~5x kayıt süresi, ~%4-12 sözcük hata oranı)",
    "The number of threads to use (for both transcoding media files to audio as well as the transcription process)" : "Kullanılacak işlem sayısı (ortam dosyalarını sese dönüştürme ve konuşmayı metne dönüştürme işlemi için)",
    "FFmpeg" : "FFmpeg",
    "Checking FFmpeg" : "FFmpeg denetleniyor",
    "Could not execute the shipped ffmpeg executable. You may need to set the path to a working binary manually." : "Paketteki FFmpeg dosyası yürütülemedi. Çalışan bir binary dosyasının yolunu el ile ayarlamanız gerekebilir.",
    "FFmpeg executable was installed successfully and works." : "Kurulabilir FFmpeg dosyası kuruldu ve çalışıyor.",
    "If the shipped ffmpeg executable doesn't work on your system for some reason you can set the path to a custom ffmpeg executable. Leave this empty to use the shipped executable." : "Paketteki yürütülebilir FFmpeg dosyası herhangi bir nedenle sisteminizde çalışmazsa, özel bir yürütülebilir FFmpeg dosyasının yolunu ayarlayabilirsiniz. Paketteki yürütülebilir dosyanın kullanılması için bu alanı boş bırakın.",
    "Failed to load settings" : "Ayarlar yüklenemedi",
    "Failed to save settings" : "Ayarlar kaydedilemedi"
},
"nplurals=2; plural=(n > 1);");
