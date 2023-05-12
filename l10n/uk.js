OC.L10N.register(
    "stt_whisper",
    {
    "Whisper Speech-To-Text" : "Whisper Speech-To-Text",
    "Speech-To-Text provider running OpenAI Whisper locally" : "Провайдер мовлення в текст, який локально запускає OpenAI Whisper",
    "Status" : "Статус",
    "Machine learning models have been downloaded successfully." : "Завантаження моделей машинного навчання відбулося успішно.",
    "The machine learning models still need to be downloaded (see below)." : "Моделі машинного навчання все ще потрібно завантажити (див. нижче).",
    "Could not execute the ffmpeg executable. You may need to set the path to a working executable manually. (See below.)" : "Не вдалося запустити виконуваний файл ffmpeg. Можливо, вам доведеться вказати шлях до робочого виконуваного файлу вручну. (Див. нижче.)",
    "Could not execute the whisper executable. You may need to compile whisper yourself for it to run on this server's processor architecture." : "Не вдалося запустити виконуваний файл whisper. Можливо, вам доведеться скомпілювати whisper самостійно, щоб він працював на архітектурі процесора цього сервера.",
    "It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work." : "Схоже, що процесор вашого сервера не підтримує інструкції AVX. Без інструкцій AVX ця програма наразі не працює.",
    "Background Jobs are not executed via cron. This app requires background jobs to be executed via cron." : "Фонові завдання не виконуються через cron. Ця програма вимагає, щоб фонові завдання виконувалися тільки через cron.",
    "The app was installed successfully and will transcribe files in background processes on request." : "Додаток було успішно встановлено, і він буде розшифровувати файли у фонових процесах за запитом.",
    "Scheduled transcription Jobs: {scheduled}" : "Запланована робота з розшифрування: {scheduled}",
    "Transcription job currently running" : "Наразі виконується завдання розшифрування",
    "No transcription job currently running" : "Наразі завдання розшифрування не виконується",
    "Whisper" : "Whisper",
    "Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:" : "Виберіть модель машинного навчання, яка буде використовуватися для транскрипції Speech-To-Text. Чим більша модель, тим більше ресурсів, таких як оперативна пам'ять, процесор і час, потрібно. Однак, чим менша модель, тим менш точними будуть результати. Щоб використовувати модель, вам потрібно завантажити її за допомогою наступної команди:",
    "Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)" : "Small модель (~1 ГБ оперативної пам'яті, ~1x час запису, ~10-20% помилок у словах)",
    "Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)" : "Medium модель (~2 ГБ оперативної пам'яті, ~3x час запису, ~7-15% помилок у словах)",
    "Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)" : "Large модель (~3,5 ГБ оперативної пам'яті, ~5-кратний час запису, ~4-12% помилок у словах)",
    "The number of threads to use (for both transcoding media files to audio as well as the transcription process)" : "Кількість потоків для використання (як для перекодування медіафайлів в аудіо, так і для процесу розшифрування)",
    "FFmpeg" : "FFmpeg",
    "Checking FFmpeg" : "Перевірка FFmpeg",
    "Could not execute the shipped ffmpeg executable. You may need to set the path to a working binary manually." : "Не вдалося запустити виконуваний файл ffmpeg. Можливо, вам доведеться вказати шлях до робочого двійкового файлу вручну.",
    "FFmpeg executable was installed successfully and works." : "Виконуваний файл FFmpeg було успішно встановлено і запущено.",
    "If the shipped ffmpeg executable doesn't work on your system for some reason you can set the path to a custom ffmpeg executable. Leave this empty to use the shipped executable." : "Якщо з якихось причин постачальний виконуваний файл ffmpeg не працює у вашій системі, ви можете вказати шлях до власного виконуваного файлу ffmpeg. Залиште це поле порожнім, щоб використати виконуваний файл, що постачається.",
    "Failed to load settings" : "Не вдалося завантажити налаштування",
    "Failed to save settings" : "Неможливо зберегти налаштування"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
