OC.L10N.register(
    "stt_whisper",
    {
    "Whisper Speech-To-Text" : "Dictado a texto Whisper",
    "Speech-To-Text provider running OpenAI Whisper locally" : "Proveedor de dictado a texto corriendo Whisper de OpenAI localmente",
    "Status" : "Estatus",
    "Machine learning models have been downloaded successfully." : "Los modelos de machine learning han sido descargados de forma satisfactoria.",
    "The machine learning models still need to be downloaded (see below)." : "Los modelos de machine learning todavía requieren ser descargados (vea abajo).",
    "Could not execute the FFmpeg executable. You may need to set the path to a working executable manually. (See below.)" : "No se pudo ejecutar el ejecutable de ffmpeg. Es probable que necesite establecer la ruta a un ejecutable funcional manualmente. (Ver más abajo)",
    "Could not execute the Whisper executable. You may need to compile whisper yourself for it to run on this server's processor architecture." : "No se pudo ejecutar el ejecutable Whisper. Es posible que necesite compilar Whisper por su cuenta para que se ejecute en la arquitectura del procesador de este servidor.",
    "It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work." : "Al parecer, el procesador de su servidor no soporta las instrucciones AVX. Sin AVX esta app actualmente no funciona.",
    "Background Jobs are not executed via cron. This app requires background jobs to be executed via cron." : "Los trabajos en segundo plano no están siendo ejecutados a través de cron. Esta app requiere que los trabajos en segundo plano sean ejecutados a través de cron.",
    "The app was installed successfully and will transcribe files in background processes on request." : "Esta app fue instalada de manera exitosa y transcribirá los archivos en procesos en segundo plano bajo solicitud.",
    "Scheduled transcription Jobs: {scheduled}" : "Trabajos de transcripción agendados: {scheduled}",
    "Transcription job currently running" : "El trabajo de transcripción está ejecutándose actualmente",
    "No transcription job currently running" : "No hay trabajos de transcripción en ejecución actualmente",
    "Whisper" : "Whisper",
    "Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:" : "Seleccione el modelo de machine learning que se usará para la transcripción de dictado a texto. Mientras más grande sea el modelo, más recursos como RAM, CPU y tiempo serán necesarios. Sin embargo, si el modelo es más pequeño, los resultados serán menos precisos. Para usar un modelo, necesita descargarlo utilizando el siguiente comando:",
    "Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)" : "Modelo pequeño (~1GB RAM, ~1x tiempo de grabación, ~10-20% tasa de error de palabras)",
    "Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)" : "Modelo mediano (~2GB RAM, ~3x tiempo de grabación, ~7-15% tasa de error de palabras)",
    "Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)" : "Modelo grande (~3.5GB RAM, ~5x tiempo de grabación, ~4-12% tasa de error de palabras)",
    "The number of threads to use (for both transcoding media files to audio as well as the transcription process)" : "El número de hilos de ejecución a utilizar (tanto para hacer transcodificación de los archivos de medios a audio, así como para el proceso mismo de transcodificación)",
    "FFmpeg" : "FFmpeg",
    "Checking FFmpeg" : "Chequeando FFmpeg",
    "Could not execute the shipped FFmpeg executable. You may need to set the path to a working binary manually." : "No se pudo ejecutar el ejecutable FFmpeg incluido. Es posible que debas configurar manualmente la ruta a un binario funcional.",
    "FFmpeg executable was installed successfully and works." : "El ejecutable de FFmpeg fue instalado exitosamente y funciona.",
    "If the shipped FFmpeg executable doesn't work on your system for some reason you can set the path to a custom FFmpeg executable. Leave this empty to use the shipped executable." : "Si el ejecutable FFmpeg incluido no funciona en tu sistema por alguna razón, puedes configurar la ruta a un ejecutable de FFmpeg personalizado. Deje este campo vacío para usar el ejecutable incluido.",
    "Failed to load settings" : "Fallo al cargar configuraciones",
    "Failed to save settings" : "Fallo al guardar configuraciones"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
