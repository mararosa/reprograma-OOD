class Joias {
    constructor(metal, emocao, pedra, tamanho, coresPedras) {
        this._metal = metal
        this._emocao = emocao
        this._pedra = pedra
        this._tamanho = tamanho
        this._coresPedras = coresPedras
    }
    get coresPedras() {
        return this._coresPedras
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
    set coresPedras(novasCores) {
        this._coresPedras.push(novasCores)
    }
    //criando um novo metodo
    tipoMetalJoia() {
        return 'Essa joia é de: ' + this._metal
    }
}

class Anel extends Joias {
    constructor(metal, emocao, tamanho, pedra, coresPedras) {
        super(metal, emocao, pedra, tamanho, coresPedras)
    }
 

    GravarNome(nome) {
            return 'Nome gravado: ' + nome
    }

}
const anelMara = new Anel('ouro', 'admiração', 'pequeno', 'zirconia', ['roxa'])

anelMara.coresPedras = 'lilás'

console.log(anelMara.GravarNome('Mara'))
