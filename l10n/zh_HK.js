OC.L10N.register(
    "stt_whisper",
    {
    "Whisper Speech-To-Text" : "Whisper 語音轉文本",
    "Speech-To-Text provider running OpenAI Whisper locally" : "在近端運行 OpenAI Whisper 的語音轉文本提供程序",
    "Speech-To-Text provider running OpenAI Whisper locally\n\nThe models run completely on your machine. No private data leaves your servers.\n\nRequirements:\n * Architecture: x86-64 with AVX support\n * OS: Linux\n\nModel sizes:\n\n* Small: 500MB\n* Medium: 1.5Gb\n* Large: 3.1GB\n\nAfter installing this app you will need to run\n\n    occ stt_whisper:download-models [model-name]\n\nwhere [model-name] is one of\n\n * small\n * medium (default)\n * large\n\n## Ethical AI Rating\n### Rating: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "本機執行 OpenAI Whisper 的語音轉文字提供者\n\n模型完全在您的機器上執行。沒有私人資料會離開您的伺服器。\n\n要求：\n* 架構：支持 AVX 的 x86-64\n* 操作系統：Linux\n\n在安裝此應用程式後，您必須執行\n\n    occ stt_whisper:download-models [模型名稱]\n\n[模型名稱]可以是以下的其中一個值\n\n * small\n * medium（預設）\n * large\n\n## 道德人工智慧評分\n### 評分：🟡\n\n正面：\n* 該模型的訓練與推理軟體是開放原始碼的\n* 訓練好的的模型免費提供，模型可以在本機執行\n\nNegative:\n* 訓練資料不是免費提供的，限制了外部各方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n[在我們的部落格上](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)取得更多關於 Nextcloud 道德人工智慧評分的資訊。",
    "Status" : "狀態",
    "Machine learning models have been downloaded successfully." : "已成功下載機器學習模型。",
    "The machine learning models still need to be downloaded (see below)." : "機器學習模型仍需下載（見下方）。",
    "Could not execute the FFmpeg executable. You may need to set the path to a working executable manually. (See below.)" : "無法執行 ffmpeg 可執行檔。您可能需要手動設定可運作的可執行檔。（見下。）",
    "Could not execute the Whisper executable. You may need to compile whisper yourself for it to run on this server's processor architecture." : "無法執行 Whisper 可執行檔。您可能需要自行編譯 Whisper 才能在此伺服器的處理器架構上執行。",
    "It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work." : "您的伺服器處理器似乎不支援 AVX 指令。若無 AVX 指令，此應用程式目前無法運作。",
    "Background Jobs are not executed via cron. This app requires background jobs to be executed via cron." : "背景作業並未透過 cron 執行。此應用程式需要背景作業透過 cron 執行。",
    "The app was installed successfully and will transcribe files in background processes on request." : "應用程式已成功安裝，並將根據要求在背景處理程序中轉錄檔案。",
    "Scheduled transcription Jobs: {scheduled}" : "預先安排好的抄錄作業：{scheduled}",
    "Transcription job currently running" : "目前正在執行抄錄作業",
    "No transcription job currently running" : "目前並未執行抄錄作業",
    "Whisper" : "Whisper",
    "Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:" : "選取要用於語音轉文字轉錄的機器學習模型。模型愈大，所需的 RAM、CPU 與時間等資源就愈多。但是，模型愈小，結果就愈不準確。要使用模型，您必須使用以下命令下載它：",
    "Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)" : "小型號（~1GB RAM，~1x 錄音時間，~10-20% 的單詞錯誤率）",
    "Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)" : "中型號（~2GB RAM，~3 倍錄音時間，~7-15% 的單詞錯誤率）",
    "Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)" : "大型號（~3.5GB RAM，~5 倍記錄時間，~4-12% 單詞錯誤率）",
    "The number of threads to use (for both transcoding media files to audio as well as the transcription process)" : "要使用的執行緒數量（用於將媒體檔案轉碼為音訊以及轉錄流程）",
    "FFmpeg" : "FFmpeg",
    "Checking FFmpeg" : "正在檢查 FFmpeg",
    "Could not execute the shipped FFmpeg executable. You may need to set the path to a working binary manually." : "無法執行隨附的 ffmpeg 可執行檔。您可能需要手動設定可運作的二進位檔案。",
    "FFmpeg executable was installed successfully and works." : "FFmpeg 可執行文件已成功安裝並運行。",
    "If the shipped FFmpeg executable doesn't work on your system for some reason you can set the path to a custom FFmpeg executable. Leave this empty to use the shipped executable." : "如果隨附的 ffmpeg 可執行檔因為某種原因無法在您的系統上執行，您可以將路徑設定為自訂的 ffmpeg 可執行檔。將此留空以使用附帶的可執行檔。",
    "Failed to load settings" : "載入設定失敗",
    "Failed to save settings" : "設定儲存失敗"
},
"nplurals=1; plural=0;");
