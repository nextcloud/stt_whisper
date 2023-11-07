OC.L10N.register(
    "stt_whisper",
    {
    "Whisper Speech-To-Text" : "Reconnaissance vocale Whisper",
    "Speech-To-Text provider running OpenAI Whisper locally" : "Un fournisseur de reconnaissance vocale utilisant OpenAI localement",
    "Speech-To-Text provider running OpenAI Whisper locally\n\nThe models run completely on your machine. No private data leaves your servers.\n\nRequirements:\n * Architecture: x86-64 with AVX support\n * OS: Linux\n\nModel sizes:\n\n* Small: 500MB\n* Medium: 1.5Gb\n* Large: 3.1GB\n\nAfter installing this app you will need to run\n\n    occ stt_whisper:download-models [model-name]\n\nwhere [model-name] is one of\n\n * small\n * medium (default)\n * large\n\n## Ethical AI Rating\n### Rating: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "Un outil de reconnaissance vocale utilisant OpenAI localement\n\nLes modèles tournent entièrement sur votre machine. Aucune donnée privée ne sort de vos serveurs.\n\nPrérequis :\n\n * Architecture: x86_64 avec compatibilité AVX\n * Système d'exploitation: Linux\n\nTaille des modèles :\n\n* Petit : 500 Mo\n* Moyen : 1,5 Go\n* Grand : 3,1 Go\n\nAprès avoir installé cette application, vous devrez exécuter\n\n    occ stt_whisper:download-models [nom-du-modèle]\n\noù [nom-du-modèle] peut prendre les valeurs\n\n * small\n * medium (par défaut)\n * large\n\n## Classification éthique de l'IA\n### Score : 🟡\n\nPoints positifs :\n* le logiciel permettant l'entraînement et l'inférence du modèle est en open source\n* le modèle d'entraînement est disponible librement, et peut donc être exécuté localement\n\nPoints négatifs :\n* les données d'entraînement ne sont pas accessibles librement, ce qui limite les possibilités laissées aux personnes tierces de les vérifier et les corriger, afin de corriger les biais et optimiser les performances et le bilan carbone du modèle.\n\nApprenez-en plus sur la classification éthique de l'IA Nextcloud [sur notre blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).",
    "Status" : "État",
    "Machine learning models have been downloaded successfully." : "Les modèles d'IA ont été téléchargés avec succès.",
    "The machine learning models still need to be downloaded (see below)." : "Les modèles d'intelligence artificielle doivent encore être téléchargés (voir ci-dessous).",
    "Could not execute the FFmpeg executable. You may need to set the path to a working executable manually. (See below.)" : "Impossible d'exécuter la commande FFmpeg. Vous devrez peut-être spécifier manuellement le chemin vers un exécutable valable (voir ci-dessous).",
    "Could not execute the Whisper executable. You may need to compile whisper yourself for it to run on this server's processor architecture." : "Impossible d'exécuter le bianire Whisper. Vous avez peut-être besoin de le compiler vous-même pour l'exécuter sur l'architecture CPU de votre serveur.",
    "It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work." : "Il semble que le processeur de votre serveur n'est pas compatible avec les instructions AVX. Sans instructions AVX, cette application ne peut fonctionner.",
    "Background Jobs are not executed via cron. This app requires background jobs to be executed via cron." : "Les tâches en arrière-plan ne sont pas exécutées avec cron. Cette application exige que ces tâches soient exécutées par cron.",
    "The app was installed successfully and will transcribe files in background processes on request." : "L'application a correctement été installée et va transcrire les fichiers dans des processus en arrière-plan sur demande.",
    "Scheduled transcription Jobs: {scheduled}" : "Jobs de transcription planifiés : {scheduled}",
    "Transcription job currently running" : "Travail de transcription en cours",
    "No transcription job currently running" : "Aucun travail de transcription n'est en cours",
    "Whisper" : "Whisper",
    "Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:" : "Sélectionnez le modèle d'apprentissage machine à utiliser pour la transcription voix en texte. Plus grand est le modèle, plus il va consommer de ressources comme la RAM, le processeur et du temps. Cependant, plus petit est le modèle, moins le résultat sera précis. Pour utiliser un modèle, vous aurez besoin de le télécharger en utilisant la commande suivante :",
    "Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)" : "Petit modèle (~1GB de RAM, ~1x temps d'enregistrement, taux d'erreur par mot de ~10-20%)",
    "Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)" : "Modèle intermédiaire (~2GB de RAM, ~3x le temps d'enregistrement,  taux d'erreur par mot de~7-15%)",
    "Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)" : "Grand modèle (~3.5GB de RAM, ~5x le temps d'enregistrement, taux d'erreur par mot de~4-12%)",
    "The number of threads to use (for both transcoding media files to audio as well as the transcription process)" : "Le nombre de threads à utiliser (aussi bien pour le transcodage des fichiers que le processus de transcription)",
    "FFmpeg" : "FFmpeg",
    "Checking FFmpeg" : "Vérification de FFmpeg",
    "Could not execute the shipped FFmpeg executable. You may need to set the path to a working binary manually." : "Impossible d'exécuter l'exécutable FFmpeg fournie avec l'extension. Vous devrez peut-être spécifier un chemin vers une copie fonctionnelle du programme.",
    "FFmpeg executable was installed successfully and works." : "L'exécutable FFmpeg a été installé avec succès et fonctionne.",
    "If the shipped FFmpeg executable doesn't work on your system for some reason you can set the path to a custom FFmpeg executable. Leave this empty to use the shipped executable." : "Si pour une raison inconnue l'exécutable FFmpeg livré avec l'extension ne fonctionne pas sur votre système, vous pouvez indiquer le chemin vers un exécutable fonctionnel. Laisser cette case vide pour utiliser la version livrée avec cette extension.",
    "Failed to load settings" : "Échec du chargement des paramètres",
    "Failed to save settings" : "Échec de l'enregistrement des paramètres"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
