OC.L10N.register(
    "stt_whisper",
    {
    "Speech-To-Text provider running OpenAI Whisper locally\n\nThe models run completely on your machine. No private data leaves your servers.\n\nRequirements:\n * Architecture: x86-64 with AVX support\n * OS: Linux\n\nModel sizes:\n\n* Small: 500MB\n* Medium: 1.5Gb\n* Large: 3.1GB\n\nAfter installing this app you will need to run\n\n    occ stt_whisper:download-models [model-name]\n\nwhere [model-name] is one of\n\n * small\n * medium (default)\n * large\n\n## Ethical AI Rating\n### Rating: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nNOTE:\n\nA few things to keep in mind.\n\n* Transcriptions need to be enabled in the Talk app if you need the calls to be transcribed with any Speech to Text provider (including this app). It can be set using this `occ` command:\n\n```\nocc config:app:set spreed call_recording_transcription --value yes\n```\n\n* This app tends to be heavy on CPU. If it starts to be an issue in your normal workflow, you can limit the number of threads used by Whisper in the \"Whisper Speech-To-Text\" section in the admin settings\n* The generated transcriptions may vary in accuracy based on the spoken language.\n* Per participant transcription in calls is currently not available but PRs are welcome!" : "Fornitore Speech-To-Text in esecuzione localmente con OpenAI Whisper\n\nI modelli vengono eseguiti completamente sulla tua macchina. Nessun dato privato lascia i tuoi server.\n\nRequisiti:\n * Architettura: x86-64 con supporto AVX\n * Sistema operativo: Linux\n\nDimensioni dei modelli:\n\n* Piccolo: 500MB\n* Medio: 1.5Gb\n* Grande: 3.1GB\n\nDopo aver installato questa applicazione, dovrai eseguire\n\n    occ stt_whisper:download-models [nome-modello]\n\ndove [nome-modello] è uno dei seguenti\n\n * piccolo\n * medio (predefinito)\n * grande\n\n## Valutazione di AI etica\n### Valutazione: 🟡\n\nPositivo:\n* il software per l'addestramento e l'inferenza di questo modello è open source\n* il modello addestrato è liberamente disponibile e quindi può essere eseguito in locale\n\nNegativo:\n* i dati di addestramento non sono liberamente disponibili, limitando la capacità di parti esterne di verificare e correggere eventuali distorsioni o ottimizzare le prestazioni del modello e l'utilizzo di CO2.\n\nScopri di più sulla Valutazione di AI etica di Nextcloud [nel nostro blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nNOTA:\n\nAlcune cose da tenere a mente.\n\n* Le trascrizioni devono essere abilitate nell'applicazione Talk se hai bisogno che le chiamate vengano trascritte con qualsiasi provider di Speech to Text (inclusa questa applicazione). Può essere impostato utilizzando questo comando `occ`:\n\n```\nocc config:app:set spreed call_recording_transcription --value yes\n```\n\n* Questa applicazione tende ad essere pesante per la CPU. Se inizia a essere un problema nel tuo flusso di lavoro normale, puoi limitare il numero di thread utilizzati da Whisper nella sezione \"Whisper Speech-To-Text\" nelle impostazioni di amministrazione.\n* Le trascrizioni generate possono variare in precisione in base alla lingua parlata.\n* La trascrizione per partecipante nelle chiamate non è attualmente disponibile, ma i PR sono benvenuti!",
    "Status" : "Stato",
    "The app was installed successfully and will transcribe files in background processes on request." : "L'applicazione è stata installata correttamente e trascriverà i file in processi in background su richiesta.",
    "Failed to load settings" : "Caricamento impostazioni non riuscito",
    "Failed to save settings" : "Salvataggio impostazioni non riuscito"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
