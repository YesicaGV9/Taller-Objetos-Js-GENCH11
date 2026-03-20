class Contenido {
    constructor(titulo, genero, anio){
        this.titulo = titulo
        this.genero = genero
        this.anio = anio
        this.disponible = true
    }
    ficha(){
        return this.titulo + " " + this.genero + " " + this.anio
    }
    retirar(){
        this.disponible = false
        return this.titulo + " Ya no esta disponible "
    }
    estado(){
        return this.disponible ? "Disponible" : "Retirado"
    }
}

class Pelicula extends Contenido{
    constructor(titulo, genero, anio, duracion){
        super(titulo, genero, anio)
        this.duracion = duracion
    }
    duracionFormateada(){
        let duracionPelicula = this.duracion
        let horas = Math.floor(duracionPelicula / 60)
        let minutos = duracionPelicula - (horas * 60)
        return horas + "horas y " + minutos + "minutos"
    }
    ficha(){
        return this.titulo + " " + this.genero + " " + this.anio + 
        " Duración: " + this.duracionFormateada()
    }
}
let pelicula1 = new Pelicula("Orgullo y prejuicio","Romance",1999,136)
let pelicula2 = new Pelicula("Donde estan las rubias","Comedia",2009,162)
let pelicula3 = new Pelicula("Molove","Drama",2026,195)



class Serie extends Contenido{
    constructor(titulo, genero, anio, temporadas){
        super(titulo, genero, anio)
        this.temporadas = temporadas
        this.episodiosPorTemporada = 0
    }

    registrarEpisodios(cantidad){
        this.episodiosPorTemporada = cantidad
    }
    totalEpisodios(){
        return this.temporadas * this.episodiosPorTemporada
    }
    ficha(){
        return this.titulo + " " + this.genero + " " + this.anio +
        " Temporadas: " + this.temporadas +
        " Total episodios: " + this.totalEpisodios()
    }
}
let serie1 = new Serie("La Oficina","Drama",2008,7)
let serie2 = new Serie("Dark","Misterio",2017,3)
let serie3 = new Serie("Friends","Comedia",1998,10)
serie1.registrarEpisodios(10)
serie2.registrarEpisodios(8)
serie3.registrarEpisodios(24)


let catalogo = [pelicula1, pelicula2, pelicula3, serie1, serie2, serie3]
console.log("--Catalogo--")
for(let c of catalogo){
    console.log(c.ficha())
}

console.log("=======================")
console.log(pelicula1.retirar())
console.log(serie2.retirar())
console.log(pelicula1.estado())
console.log(serie2.estado())


let disponibles = 0
for(let c of catalogo){
    if(c.disponible){
        disponibles++
    }
}
console.log("Disponibles: " + disponibles)