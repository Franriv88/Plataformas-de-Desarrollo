export const usuarios = [
    {
        id: 1,
        rol: "admin",
        name: "Francisco",
        lastName: "Rivas",
        email: "francisco.rivas@davinci.edu.ar",
        password: "12345",
        img: "https://i.ibb.co/vxrhBB1K/Perfil-400x400.png"
    },
    {
        id: 2,
        rol: "user",
        name: "Lucia",
        lastName: "Gomez",
        email: "lucia@gmail.com",
        password: "abcd",
        img: "https://i.ibb.co/BVzW570p/Logo-Sin-Esquinas.webp"
    },
]

export const talleres = [
    {
        id: 1,
        tipo: "workshop",
        name: "Cerámica nivel 1",
        cupo: 6,
        fecha: "10 de Octubre de 2026",
        horario: "10:00am",
        duracion: "2 horas",
        precio: 5000
    },
    {
        id: 2,
        tipo: "taller",
        name: "Sushi Intensivo",
        cupo: 6,
        fecha: "10 de Octubre de 2026",
        horario: "10:00am",
        duracion: "2 horas",
        precio: 5000
    },
    {
        id: 3,
        tipo: "taller",
        name: "Electricidad Básica",
        cupo: 6,
        fecha: "10 de Octubre de 2026",
        horario: "10:00am",
        duracion: "2 horas",
        precio: 5000
    }
]

export const reservas = [
    {
        id: 1,
        usuarioId: 2,
        tallerId: 1,
        fechaReserva: "28 de Septiembre de 2026"
    }
]
    
