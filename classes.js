class Anel {
    constructor(metal, emocao, pedra, tamanho, anelCasamento, coresPedras ) {
        this._metal = metal
        this._emocao = emocao
        this._pedra = pedra
        this._tamanho = tamanho
        this._anelCasamento = anelCasamento
        this._coresPedras= coresPedras
    }
    get coresPedras() {
        return this._coresPedras
    }
    get anelCasamento() {
        return this._anelCasamento
    }
    get metal() {
        return this._metal
    }
    get pedra() {
        return this._pedra
    }
    get tamanho() {
        return this._tamanho
    }
    set tamanho(novoTamanho) {
        this._tamanho = novoTamanho
    }
    set emocao(novaEmocao) {
     this._emocao = novaEmocao
    }
    set anelCasamento(resposta) {
        this._anelCasamento= resposta
    }
    set coresPedras(novasCores) {
        this._coresPedras.push(novasCores)
       }
       //criando um novo metodo
       get tipoMetalAnel() {
        return 'Esse anél é de: ' + this._metal
        }
}

const alineAnel = new Anel('prata', 'amizade', 'zirconia', 'pequeno', false, ['roxa, vermelha, azul'])
alineAnel.coresPedras = 'amarelo'
console.log(alineAnel.tipoMetalAnel)
console.log(alineAnel)
