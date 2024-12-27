import { Book } from "../interfaces/Book";

export const booksData: Book[] = [
    {
        id: 1,
        title: 'El Principito',
        author: 'Antoine de Saint-Exupéry',
        image: '../src/assets/images/principito.png',
        price: 35000,
        description: 'El Principito es una novela corta escrita por Antoine de Saint-Exupéry en 1943 que cuenta ' +
            'la historia de un príncipe que vive en un asteroide y cae a la Tierra, donde conoce a un piloto perdido en ' +
            'el desierto. El libro es considerado un clásico de la literatura y uno de los más vendidos ' +
            'de todos los tiempos. ',
        stock: 15
    },
    {
        id: 2,
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        image: '../src/assets/images/cien_anios_de_soledad.png',
        price: 45000,
        description: 'Cien años de soledad es una novela de Gabriel García Márquez que narra la historia de la familia ' +
            'Buendía-Iguarán a lo largo de un siglo en el pueblo ficticio de Macondo, Colombia. La obra se considera ' +
            'una de las más importantes de la literatura latinoamericana y un ejemplo del realismo mágico.',
        stock: 10
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        image: '../src/assets/images/1984.png',
        price: 42000,
        description: '1984 es una novela de George Orwell publicada en 1949 que describe un mundo distópico en el que ' +
            'el gobierno y la propaganda controlan todos los aspectos de la vida de las personas. La historia se ' +
            'desarrolla en Londres en 1984, donde el Gran Hermano controla todo lo que la gente lee, habla, dice y hace.',
        stock: 12
    },
    {
        id: 4,
        title: 'El Hobbit',
        author: 'J.R.R. Tolkien',
        image: '../src/assets/images/hobbit.png',
        price: 38000,
        description: 'El Hobbit, es una novela de J.R.R. Tolkien publicada en el año 1937. En ella se relata la historia' +
            ' de Bilbo Bolsón, y de su viaje a la Montaña Solitaria junto con Gandalf y Thorin y Compañía para recuperar' +
            ' el tesoro custodiado por el dragón Smaug y recuperar también el reino de Erebor.',
        stock: 25
    },
    {
        id: 5,
        title: 'Orgullo y prejuicio',
        author: 'Jane Austen',
        image: '../src/assets/images/orgullo_y_prejuicio.png',
        price: 30000,
        description: 'Orgullo y prejuicio es una novela romántica escrita por Jane Austen y publicada en 1813.' +
            ' La historia se centra en la relación entre Elizabeth Bennet, una mujer de opinión, y Fitzwilliam Darcy, ' +
            'un hombre orgulloso, que se conocen en un baile y se detestan a primera vista. A pesar de los malentendidos' +
            ' y el orgullo de Darcy, los dos terminan por enamorarse y casarse.',
        stock: 18
    },
    {
        id: 6,
        title: 'Harry Potter y la piedra filosofal',
        author: 'J.K. Rowling',
        image: '../src/assets/images/harry_piedra_filosofal.png',
        price: 50000,
        description: 'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable ' +
            'primo Dudley. Se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para ' +
            'siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia ' +
            'y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan ' +
            'especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes.',
        stock: 30
    },
    {
        id: 7,
        title: 'Matar a un ruiseñor',
        author: 'Harper Lee',
        image: '../src/assets/images/matar_a_un_ruiseñor.png',
        price: 43000,
        description: 'Matar a un ruiseñor es una novela de la escritora estadounidense Harper Lee, que narra la infancia ' +
            'de Jean Louise Finch (Scout) en un pueblo de Alabama durante la Gran Depresión. La historia se centra en ' +
            'la defensa de un hombre negro acusado de violar a una mujer blanca por parte del padre de Scout, Atticus, ' +
            'un abogado. La novela explora temas como la injusticia racial, la destrucción de la inocencia, la clase, ' +
            'el coraje, la compasión y los roles de género.',
        stock: 22
    },
    {
        id: 8,
        title: 'Don Quijote de la Mancha',
        author: 'Miguel de Cervantes',
        image: '../src/assets/images/don_quijote_de_la_mancha.png',
        price: 48000,
        description: 'Don Quijote de la Mancha es una novela de Miguel de Cervantes Saavedra que narra las aventuras ' +
            'de Alonso Quijano, un hidalgo que se cree un caballero andante tras leer muchas novelas de caballería. ' +
            'La obra se publicó en 1605 y es considerada una de las más importantes de la literatura española y universal.',
        stock: 17
    },
    {
        id: 9,
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez',
        image: '../src/assets/images/el_amor_en_los_tiempos_del_colera.png',
        price: 46000,
        description: 'El amor en los tiempos del cólera es una novela de Gabriel García Márquez que narra la historia ' +
            'de amor entre Fermina Daza y Florentino Ariza, a lo largo de más de 60 años. La novela se desarrolla en un ' +
            'pueblo portuario del Caribe a finales del siglo XIX y principios del XX, en un contexto de penuria y guerras civiles.',
        stock: 14
    },
    {
        id: 10,
        title: 'La sombra del viento',
        author: 'Carlos Ruiz Zafón',
        image: '../src/assets/images/la_sombra_del_viento.png',
        price: 55000,
        description: 'Un amanecer de 1945, un muchacho es conducido por su padre a un misterioso lugar oculto en el ' +
            'corazón de la ciudad vieja: el Cementerio de los Libros Olvidados. Allí, Daniel Sempere encuentra un libro ' +
            'maldito que cambia el rumbo de su vida y le arrastra a un laberinto de intrigas y secretos enterrados en ' +
            'el alma oscura de la ciudad. La Sombra del Viento es un misterio literario ambientado en la Barcelona de ' +
            'la primera mitad del siglo xx, desde los últimos esplendores del Modernismo hasta las tinieblas de la posguerra.',
        stock: 19
    },
    {
        id: 11,
        title: 'Cumbres borrascosas',
        author: 'Emily Brontë',
        image: '../src/assets/images/cumbres_borrascosas.png',
        price: 47000,
        description: 'Cumbres borrascosas, una de las novelas inglesas más relevantes del siglo XIX, narra la épica ' +
            'historia de Catherine y Heathcliff. Situada en los sombríos y desolados páramos de Yorkshire, constituye ' +
            'una asombrosa visión metafísica del destino, la obsesión, la pasión y la venganza.',
        stock: 21
    },
    {
        id: 12,
        title: 'Crimen y castigo',
        author: 'Fiódor Dostoyevski',
        image: '../src/assets/images/crimen_y_castigo.png',
        price: 49000,
        description: 'La historia de un doble crimen cometido por un joven y su subsecuente lucha interna con sus ' +
            'emociones y sus delirios. «Los personajes no se parecen a nosotros, y no obstante nadie nos habla más ' +
            'adentro que ellos, nadie se parece más a nuestra última verdad», del prólogo de Carlos Pujol.',
        stock: 16
    },
    {
        id: 13,
        title: 'Los miserables',
        author: 'Victor Hugo',
        image: '../src/assets/images/los_miserables.png',
        price: 55000,
        description: 'Los Miserables es una novela histórica francesa escrita por Victor Hugo y publicada en 1862. ' +
            'Se trata de una obra que cuenta la historia de Jean Valjean, un exconvicto que busca escapar de su pasado ' +
            'para vivir una vida honesta. Sin embargo, es perseguido por el inspector Javert, quien lo quiere enviar ' +
            'de nuevo a prisión.',
        stock: 24
    },
    {
        id: 14,
        title: 'Ulises',
        author: 'James Joyce',
        image: '../src/assets/images/ulises.png',
        price: 60000,
        description: 'Uno de los clásicos indiscutibles del siglo XX en una cuidada edición. Ulises es una novela del ' +
            'escritor irlandés James Joyce, publicada en 1922 con el título original en inglés de Ulysses. Su título ' +
            'proviene del protagonista de la versión latina de la Odisea de Homero, originalmente llamado en ' +
            'griego Odiseo. Es considerada por gran parte de la crítica la mejor novela en idioma inglés del ' +
            'siglo XX. Según el crítico y traductor español Francisco García Tortosa, Ulises es una de las novelas más ' +
            'influyentes, discutidas y renombradas del siglo XX. El libro ha sido objeto de numerosos y profundos ' +
            'estudios, críticas y controversias.',
        stock: 10
    },
    {
        id: 15,
        title: 'La Odisea',
        author: 'Homero',
        image: '../src/assets/images/la_odisea.png',
        price: 35000,
        description: 'La Odisea narra la historia del héroe griego Odiseo, Ulises, el viaje de regreso a su reino de ' +
            'Ítaca donde le esperan su esposa Penélope, rodeada de pretendiente, y su hijo Telémaco. Un trayecto de ' +
            'aproximadamente un mes de navegación que se alarga aproximadamente diez años, los mismos que duró la guerra de Troya.',
        stock: 18
    }
];
