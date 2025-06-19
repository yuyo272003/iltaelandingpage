'use client'

import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
    BookOpen,
    Headphones,
    BarChart3,
    UserPlus,
    BookOpenCheck,
    DownloadCloud,
} from 'lucide-react'

export default function Home() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

    return (
        <>
            <Head>
                <title>ILTAE - Alfabetización para adultos</title>
                <meta
                    name="description"
                    content="Impulso a la Lectura, Transformación y Alfabetización Educativa"
                />
            </Head>

            {/* Lightbox Modal */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setLightboxSrc(null)}
                >
                    <div className="relative">
                        <Image
                            src={lightboxSrc}
                            alt="Preview"
                            width={600}
                            height={1200}
                            className="rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold"
                            onClick={() => setLightboxSrc(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
                {/* Hero */}
                <section className="relative overflow-visible py-20 md:py-28">
                    {/* Fondo tenue */}
                    <div
                        className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')]
             bg-cover bg-center opacity-5"
                    />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-12">
                            {/* Texto + botones */}
                            <div className="mb-10 md:mb-0 md:w-1/2 md:pr-8 text-center md:text-left">
                                <Image
                                    src="/iltae_azul.png"
                                    alt="ILTAE Logo"
                                    width={400}
                                    height={120}
                                    className="mx-auto md:mx-0 mb-8"
                                    priority
                                />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-sky-900 leading-tight">
                                    Aprende a leer y escribir<br/>
                                    desde cero
                                </h1>
                                <p className="text-xl mb-8 text-gray-600 max-w-lg mx-auto md:mx-0">
                                    Con ILTAE, el aprendizaje es accesible y amigable para adultos en cualquier etapa de
                                    la vida.
                                </p>
                                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8">
                                    <Link
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSdUBuC2MMLxHfSEapwp-7lks84Wg86E6fsgPuUSxqAGxQ1lJQ/viewform?usp=header"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-sky-600 hover:bg-sky-700 text-white text-lg font-medium px-8 py-4 rounded-lg transition"
                                    >
                                        Solicita Probar
                                    </Link>
                                    <Link
                                        href="https://drive.google.com/drive/folders/1vUSJ4Dll4jtx3n63g_9phpPqZuUv62L4?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-4 rounded-lg transition"
                                    >
                                        Instala en Android
                                    </Link>

                                </div>
                            </div>

                            {/* Carrusel adaptado */}
                            <div className="md:w-1/2">
                                <div className="relative overflow-visible py-8">
                                    <div className="overflow-x-auto md:overflow-visible w-full">
                                        <div className="flex space-x-4 md:-ml-20">
                                            {['/screen1.png', '/screen2.png', '/screen3.png'].map((src, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`
                            relative flex-shrink-0
                            w-64 md:w-auto
                            transition-transform duration-300
                            md:hover:scale-125
                            md:hover:z-20
                            cursor-pointer
                          `}
                                                    onClick={() => setLightboxSrc(src)}
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Captura ${idx + 1}`}
                                                        width={300}
                                                        height={600}
                                                        className="rounded-2xl shadow-lg"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-900">
                            Características diseñadas para tu aprendizaje
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Headphones className="h-6 w-6 text-sky-600" />,
                                    title: 'Audio guía',
                                    text: 'Escucha instrucciones claras para cada ejercicio.',
                                },
                                {
                                    icon: <BookOpen className="h-6 w-6 text-sky-600" />,
                                    title: 'Ejercicios interactivos',
                                    text: 'Práctica con juegos diseñados para reforzar tu aprendizaje.',
                                },
                                {
                                    icon: <BarChart3 className="h-6 w-6 text-sky-600" />,
                                    title: 'Progreso personalizado',
                                    text: 'Avanza a tu propio ritmo y desbloquea nuevos niveles.',
                                },
                            ].map((f, i) => (
                                <div
                                    key={i}
                                    className="bg-sky-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2 text-sky-900">{f.title}</h3>
                                    <p className="text-gray-600">{f.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section id="how-it-works" className="py-20 bg-gradient-to-b from-sky-50 to-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-900">
                            Cómo funciona
                        </h2>
                        <div className="relative">
                            <div className="hidden md:block absolute top-1/2 inset-x-0 h-1 bg-sky-200 -translate-y-1/2" />
                            <div className="grid md:grid-cols-3 gap-12 relative z-10">
                                {[
                                    {
                                        icon: <DownloadCloud className="h-8 w-8 text-white" />,
                                        title: 'Descarga la App',
                                        text: 'En Play Store o App Store.',
                                    },
                                    {
                                        icon: <UserPlus className="h-8 w-8 text-white" />,
                                        title: 'Regístrate',
                                        text: 'Crea tu usuario con un nickname.',
                                    },
                                    {
                                        icon: <BookOpenCheck className="h-8 w-8 text-white" />,
                                        title: '¡Practica!',
                                        text: 'Realiza ejercicios interactivos.',
                                    },
                                ].map((s, i) => (
                                    <div key={i} className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 bg-sky-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                            {s.icon}
                                        </div>
                                        <h4 className="text-2xl font-semibold mb-3 text-sky-900">{s.title}</h4>
                                        <p className="text-gray-600">{s.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visión */}
                <section id="vision" className="py-24 bg-gradient-to-r from-sky-50 to-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-sky-900">
                            Nuestra <span className="text-sky-600">Visión</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2 relative">
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-100 rounded-full opacity-70" />
                                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-sky-200 rounded-full opacity-70" />
                                <div className="relative bg-white p-8 rounded-lg shadow-xl">
                                    <p className="text-xl leading-relaxed text-gray-700">
                                        Aspiramos a ser reconocidos, en un plazo de 5 años, como la{' '}
                                        <span className="font-semibold text-sky-700">
                      plataforma líder en alfabetización digital
                    </span>{' '}
                                        para adultos, contribuyendo a reducir significativamente las tasas de
                                        analfabetismo.
                                    </p>
                                    <p className="text-xl leading-relaxed text-gray-700 mt-4">
                                        Visualizamos un futuro donde toda persona adulta, independientemente de su
                                        origen o circunstancias, pueda acceder a oportunidades de aprendizaje que
                                        respeten su experiencia y ritmo personal.
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-md">
                                    <div className="absolute inset-0 bg-sky-600 rounded-lg transform rotate-3" />
                                    <Image
                                        src="/vision.jpg"
                                        alt="Nuestra visión"
                                        width={600}
                                        height={400}
                                        className="relative rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Misión */}
                <section id="mission" className="py-24 bg-sky-600 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
                            Nuestra <span className="text-sky-200">Misión</span>
                        </h2>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-md">
                                    <div className="absolute inset-0 bg-white rounded-lg transform -rotate-3" />
                                    <Image
                                        src="/mision.jpg"
                                        alt="Nuestra misión"
                                        width={600}
                                        height={400}
                                        className="relative rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-500 rounded-full opacity-30" />
                                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sky-400 rounded-full opacity-30" />
                                <div className="relative">
                                    <p className="text-xl leading-relaxed">
                                        ILTAE tiene como misión facilitar el acceso a la alfabetización a personas
                                        adultas a través de una{' '}
                                        <span className="font-semibold text-sky-200">
                      plataforma tecnológica intuitiva y respetuosa
                    </span>
                                        , brindando herramientas de aprendizaje adaptadas a sus necesidades específicas.
                                    </p>
                                    <p className="text-xl leading-relaxed mt-4">
                                        Nos comprometemos a transformar la vida de nuestros usuarios mediante el
                                        desarrollo de competencias de lectoescritura que fortalezcan su autonomía,
                                        dignidad y participación activa en su comunidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Valores */}
                <section id="values" className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-sky-900">
                            Nuestros <span className="text-sky-600">Valores</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                {
                                    title: 'Innovación',
                                    text: 'Buscamos constantemente soluciones creativas y efectivas para enfrentar los desafíos de la alfabetización en adultos.',
                                },
                                {
                                    title: 'Inclusión',
                                    text: 'Diseñamos experiencias de aprendizaje accesibles para personas con diferentes capacidades, contextos y ritmos de aprendizaje.',
                                },
                                {
                                    title: 'Impacto Social',
                                    text: 'Trabajamos con el objetivo de generar un cambio significativo y medible en la vida de las personas y en sus comunidades.',
                                },
                                {
                                    title: 'Autonomía',
                                    text: 'Fomentamos la independencia de nuestros usuarios, ofreciéndoles herramientas que promuevan su autoaprendizaje y confianza.',
                                },
                                {
                                    title: 'Empoderamiento',
                                    text: 'Creemos en la capacidad de cada individuo para transformar su realidad a través del conocimiento y las habilidades adquiridas.',
                                },
                                {
                                    title: 'Respeto',
                                    text: 'Valoramos la dignidad y experiencia de cada persona, creando un entorno de aprendizaje respetuoso y libre de prejuicios.',
                                },
                            ].map((val, i) => (
                                <div key={i} className="group">
                                    <div className="h-32 flex items-center justify-center mb-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 group-hover:from-sky-100 group-hover:to-sky-200 transition-all duration-300">
                                        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-sky-200 rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                                        <h3 className="text-3xl font-bold text-sky-800 relative z-10">{val.title}</h3>
                                    </div>
                                    <p className="text-gray-700 text-lg">{val.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-sky-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            ¿Listo para comenzar tu aprendizaje?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Únete a nuestra comunidad y comienza tu camino hacia la alfabetización hoy mismo.
                        </p>
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdUBuC2MMLxHfSEapwp-7lks84Wg86E6fsgPuUSxqAGxQ1lJQ/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-sky-600 hover:bg-sky-50 font-medium text-lg px-8 py-4 rounded-lg transition inline-block"
                        >
                            Registrarme ahora
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8 mb-8">
                            <div>
                                <Image
                                    src="/iltae_azul.png"
                                    alt="ILTAE Logo"
                                    width={180}
                                    height={60}
                                    className="mb-4 bg-white p-2 rounded"
                                />
                                <p className="text-gray-400">
                                    Impulso a la Lectura, Transformación y Alfabetización Educativa
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="#" className="text-gray-400 hover:text-white">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#features" className="text-gray-400 hover:text-white">
                                            Características
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#how-it-works" className="text-gray-400 hover:text-white">
                                            Cómo funciona
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#vision" className="text-gray-400 hover:text-white">
                                            Sobre nosotros
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li>zs22017037@estudiantes.uv.mx</li>
                                    <li>+52 961 712 7706</li>
                                    <li>Coatzacoalcos, Veracruz</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                                <div className="flex space-x-4">
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        Instagram
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                            <p>© {new Date().getFullYear()} ILTAE. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}
