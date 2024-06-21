const propiedades_ventas = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        sanitario: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        sanitario: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
     {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFwYXJ0YW1lbnRvJTIwZGUlMjBsdWpvJTIwZW4lMjB6b25hJTIwZXhjbHVzaXZhfGVufDB8fDB8fHww',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        sanitario: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa acogedor en la montaña',
        src: 'https://images.unsplash.com/photo-1595521624992-48a59aef95e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FzYSUyMGFjb2dlZG9yJTIwZW4lMjBsYSUyMG1vbnRhJUMzJUIxYXxlbnwwfHwwfHx8MA%3D%3D',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        sanitario: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
     {
        nombre: 'Casa de lujo en zona exclusiva',
        src: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzYSUyMGVuJTIwdmVudGF8ZW58MHx8MHx8fDA%3D',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 6,
        sanitario: 5,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        sanitario: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        sanitario: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://images.unsplash.com/photo-1576874748772-584aa2bee2d4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 6,
        sanitario: 4,
        costo: 12000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo',
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Calle Siempreviva, CA 45678',
        habitaciones: 4,
        sanitario: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa acogedor en la montaña',
        src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 3,
        sanitario: 2,
        costo: 7200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa de campo en zona exclusiva',
        src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        sanitario: 4,
        costo: 7200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Home Studio acogedor en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        sanitario: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
];

const ventaHome = document.querySelector('#ventasPropiedades');
const alquilerHome = document.querySelector('#alquileresPropiedades');
// funcion para generar la card con sus datos dinamicos
function generarTarjetaPropiedad(propiedad) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} | <i class="fas fa-bath"></i> ${propiedad.sanitario}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${propiedad.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                    ${propiedad.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
                </div>
            </div>
        </div>`;
}
//funcion para mostrar en pantalla los datos de lso array
function renderizarPropiedades(propiedades, contenedor, limit = null) {
    let html = '';
    const propiedadesToRender = limit ? propiedades.slice(0, limit) : propiedades;
    propiedadesToRender.forEach(propiedad => {
        html += generarTarjetaPropiedad(propiedad);
    });
    contenedor.innerHTML = html;
}

// Renderizar propiedades en la página principal (solo 3 de cada tipo)
if (ventaHome) {
    renderizarPropiedades(propiedades_ventas, ventaHome, 3);
}

if (alquilerHome) {
    renderizarPropiedades(propiedades_alquiler, alquilerHome, 3);
}

// Renderizar todas las propiedades en las páginas específicas
const allVentasContainer = document.querySelector('#allVentasPropiedades');
const allAlquileresContainer = document.querySelector('#allAlquileresPropiedades');

if (allVentasContainer) {
    renderizarPropiedades(propiedades_ventas, allVentasContainer);
}

if (allAlquileresContainer) {
    renderizarPropiedades(propiedades_alquiler, allAlquileresContainer);
}
