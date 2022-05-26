class Microphone {
    constructor(){
        this.initialized = false;
        navigator.mediaDevices.getUserMedia({audio:true})
        .then(function(stream){
            this.audioContext = new AudioContext();
            this.microphone  = this.audioContext.createMediaStreamSource(stream);
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 512;
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            this.microphone.connect(this.analyser);
            this.initialized = true;

        }.bind(this)).catch(function(err){
            alert(err);
        });
    }
    getSamples(){
        this.analyser.getByteTimeDomainData(this.dataArray);
        let normSamples = [...this.dataArray].map(e => e/128 - 1);
        return normSamples;
    }
    getVolume(){
        this.analyser.getByteTimeDomainData(this.dataArray);
        let normSamples = [...this.dataArray].map(e => e/128 - 1);
        let sum = 0;
        for(let i = 0; i < normSamples.length; i++){
            sum += normSamples[i] * normSamples[i];
        }
        let volume = Math.sqrt( sum / normSamples.length);
        return volume;
    }
}

