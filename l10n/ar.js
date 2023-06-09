OC.L10N.register(
    "stt_whisper",
    {
    "Whisper Speech-To-Text" : "تطبيق ويزبر \"الهامس\" للتحويل من صوت إلى نص",
    "Speech-To-Text provider running OpenAI Whisper locally" : "خدمة التحويل من صوت إلى نص باستخدام OpenAI Whisper تعمل محلّيّاً",
    "Speech-To-Text provider running OpenAI Whisper locally\n\nThe models run completely on your machine. No private data leaves your servers.\n\nRequires:\n\n * Architecture: x86_64\n * OS: Linux\n\nAfter installing this app you will need to run\n\n    occ stt_whisper:download-models [model-name]\n\nwhere [model-name] is one of\n\n * small\n * medium (default)\n * large\n\n## Ethical AI Rating\n### Rating: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "مزود سبيتش- تو-تكست يقوم بتشغيل نظام ويسبر أوبن ايه آي محليًا \n\nتعمل النماذج بالكامل على جهازك. لا توجد بيانات خاصة تخرج خارج خوادمك. \n\nيتطلب:\n\n * البنية: x86_64 \n* نظام التشغيل: لينوكس\n\nبعد تحميل هذا التطبيق سوف تحتاج إلي تشغيل:\n\nocc stt_whisper:تحميل نماذج [اسم النموذج] \n\nحيث [اسم النموذج] \n\nهو واحد من \n* صغير \n* متوسط (افتراضي) \n* كبير \n\n## تقييم AI الوصفي\n ### التقييم: 🟡 \n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز \n\nالسلبي: \n* بيانات التدريب غير متاحة مجانًا ، مما يحد من قدرة الأطراف الخارجية للتحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\nتعرف على المزيد حول التقييم الوصفي لنكست كلود AI [من خلال مدونتنا] (https://nextcloud.com/blog/nextcloud-ethical-ai-rating/ ).",
    "Status" : "الحاله",
    "Machine learning models have been downloaded successfully." : "تمّ تحميل نماذج تعلّم الآلة بنجاح.",
    "The machine learning models still need to be downloaded (see below)." : "نماذج تعلّم الآلة لم يتم تحميلها بعدُ. (أنظر أدناه).",
    "Could not execute the ffmpeg executable. You may need to set the path to a working executable manually. (See below.)" : "لم يُمكن تشغيل الملف التنفيذي ffmpeg. ربما تحتاج إلى تعيين مسار الملف التنفيبذي يدويّاً. (أنظر أدناه).",
    "Could not execute the whisper executable. You may need to compile whisper yourself for it to run on this server's processor architecture." : "لم يُمكن تنفيذ الملف التنفيذي whisper. ربما تحتاج إلى ترجمة whisper بنفسك حتى يمكن تنفيذه على معالج خادوم من هذا النوع من المعمارية. ",
    "It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work." : "يبدو أن معالج الخادوم لا يدعم تعليمات AVX و التي لن يعمل هذا التطبيق بدونها.",
    "Background Jobs are not executed via cron. This app requires background jobs to be executed via cron." : "مهام الخلفية لا تعمل حاليّاً عبر cron. هذا التطبيق يستلزم تشغيل مهام الخلفية عبر cron.",
    "The app was installed successfully and will transcribe files in background processes on request." : "تمّ تنصيب هذا التطبيق بنجاح و هو مستعد لاستنساخ الملفات في الخلفية عند الطلب.",
    "Scheduled transcription Jobs: {scheduled}" : "مهام معالجة تحويلية مجدولة: {scheduled}",
    "Transcription job currently running" : "مهمة معالجة تحويلية تعمل حاليّاً",
    "No transcription job currently running" : "لا توجد مهمة معالجة تحويلية تعمل حاليّاً",
    "Whisper" : "تطبيق Whisper \"هامس\"",
    "Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:" : "إختر نموذج تعلّم الآلة الذي سيستخدم في تحويل الصوت إلى كتابة. كلما كان النموذج أكبر كلما كان استهلاكه للذاكرة و المُعالج و وقت المعالجة أكبر. و بالمقابل كلما كان اصغر كلما كانت دقّته أقل. قبل استخدام النموذج يجب تنزيله باستخدام الأمر التالي: ",
    "Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)" : " نموذج صغير (~1GB RAM, ~1x r زمن التسجيل, ~10-20% مُعدّل الخطأ بالكلمات)",
    "Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)" : " نموذج متوسط  (~2GB RAM, ~3x زمن التسجيل, ~7-15% معدل الخطأ بالكلمات)",
    "Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)" : "نموذج كبير (~3.5GB RAM, ~5x زمن التسجيل, ~4-12% معدل الخطأ بالكلمات)",
    "The number of threads to use (for both transcoding media files to audio as well as the transcription process)" : "عدد الأنساق المستخدمة ( تشمل عمليات المعالجة التحويلية لملفات الوسائط المتعددة إلى صوت و من ثمّ تحويل الصوت إلى كتابة)",
    "FFmpeg" : "FFmpeg",
    "Checking FFmpeg" : "اختبار FFmpeg",
    "Could not execute the shipped ffmpeg executable. You may need to set the path to a working binary manually." : "لم يُمكن تنفيذ الملف التنفيذي المُحمّل ffmpeg. ربما تحتاج إلى تعيين مساره يدويّاً.",
    "FFmpeg executable was installed successfully and works." : "الملف التنفيذ FFmpeg موجود و يعمل كما يجب",
    "If the shipped ffmpeg executable doesn't work on your system for some reason you can set the path to a custom ffmpeg executable. Leave this empty to use the shipped executable." : "الملف التنفيذي المُحمّل ffmpeg لا يعمل لسببٍ ما. ربما يتوجب عليك تعيين مسار لملف تنفيذي غيره أو أُترك هذا فارغاً ليتم استخدام الملف التنفيذي المُحمّل.",
    "Failed to load settings" : "إخفاق في تحميل الإعدادات",
    "Failed to save settings" : "فشل حفظ الإعدادات"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
