OC.L10N.register(
    "stt_whisper",
    {
    "Whisper Speech-To-Text" : "Whisper говор-у-текст",
    "Speech-To-Text provider running OpenAI Whisper locally" : "Пружалац услуге претварања говора-у-текст који локално извршава OpenAI Whisper",
    "Speech-To-Text provider running OpenAI Whisper locally\n\nThe models run completely on your machine. No private data leaves your servers.\n\nRequires:\n\n * Architecture: x86_64\n * OS: Linux\n\nAfter installing this app you will need to run\n\n    occ stt_whisper:download-models [model-name]\n\nwhere [model-name] is one of\n\n * small\n * medium (default)\n * large" : "Пружалац услуге претварања говора-у-текст који локално извршава OpenAI Whisper\n\nМодели се у потпуности извршавају на вашој машини. Никакви приватни подаци не напуштају ваше сервере.\n\nПотребно је:\n\n * Архитектура: x86_64\n * ОС: Linux\n\nКада инсталирате ову апликацију, мораћете да извршите\n\n    occ stt_whisper:download-models [име-модела]\n\nгде је [име-модела] једно од\n\n * small\n * medium (подразумевано)\n * large",
    "Status" : "Стање",
    "Machine learning models have been downloaded successfully." : "Успешно су преузети модели машинског учења.",
    "The machine learning models still need to be downloaded (see below)." : "Још увек је потребно да се преузму модели машинског учења (погледајте испод).",
    "Could not execute the ffmpeg executable. You may need to set the path to a working executable manually. (See below.)" : "Не може да се изврши ffmpeg извршни фајл. Вероватно је потребно да ручно поставите путању до исправног извршног фајла. (Погледајте испод.)",
    "Could not execute the whisper executable. You may need to compile whisper yourself for it to run on this server's processor architecture." : "Не може да се изврши whisper извршни фајл. Вероватно је потребно сами компајлирате whisper тако да се извршава на архитектури овог сервера.",
    "It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work." : "Изгледа да процесор вашег сервера не подржава AVX инструкције. Without AVX instructions this app currently does not work. Без AVX инструкција, ова апликација тренутно не може да ради.",
    "Background Jobs are not executed via cron. This app requires background jobs to be executed via cron." : "Позадински послови се не извршавају са cron. Ова апликација захтева да се позадински послови извршавају са cron.",
    "The app was installed successfully and will transcribe files in background processes on request." : "Апликација је успешно инсталирана и на захтев ће у позадинским процесима да транскрибује фајлове.",
    "Scheduled transcription Jobs: {scheduled}" : "Заказани послови транскрипције: {scheduled}",
    "Transcription job currently running" : "Тренутно се извршава посао транскрипције",
    "No transcription job currently running" : "Тренутно се не извршава ниједан посао транскрипције",
    "Whisper" : "Whisper",
    "Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:" : "Изаберите модел учења који ће да се користи за транскрпцију говора-у-текст. Већем моделу је потребно више ресурса као што су RAM, CPU и потребно време. Међутим, што је мањи модел, то су резултати мање прецизни. Да бисте користили модел морате да га преузмете следећом командом:",
    "Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)" : "Small модел (~1GB RAM, ~1x време снимања, ~10-20% количина погрешних речи)",
    "Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)" : "Medium модел (~2GB RAM, ~3x време снимања, ~7-15% количина погрешних речи)",
    "Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)" : "Large модел (~3.5GB RAM, ~5x време снимања, ~4-12% количина погрешних речи)",
    "The number of threads to use (for both transcoding media files to audio as well as the transcription process)" : "Број нити који ће се користити (и за процес транскодирања медијских фајлова у аудио, и за процес транскрипције)",
    "FFmpeg" : "FFmpeg",
    "Checking FFmpeg" : "Проверава се FFmpeg",
    "Could not execute the shipped ffmpeg executable. You may need to set the path to a working binary manually." : "Не може да се изврши испоручени ffmpeg извршни фајл. Вероватно је потребно да ручно поставите путању до исправног бинарног фајла.",
    "FFmpeg executable was installed successfully and works." : "FFmpeg извршни фајл је успешно инсталиран и ради како треба.",
    "If the shipped ffmpeg executable doesn't work on your system for some reason you can set the path to a custom ffmpeg executable. Leave this empty to use the shipped executable." : "Ако испоручени ffmpeg извршни фајл из неког разлога не ради на вашем систему, можете да поставите путању до произвољног ffmpeg извршног фајла. Оставите ово подешавање празно ако желите да се користи испоручени извршни фајл.",
    "Failed to load settings" : "Грешка у дохватању поставки",
    "Failed to save settings" : "Грешка приликом чувања поставки"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");