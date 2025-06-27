const services = [
    {
        title: "Garantía de Precisión: ",
        description: "Sus finanzas son cruciales. Por eso ofrecemos nuestra garantía de precisión: contabilidad exacta o le devolvemos su dinero.",
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shield-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.468 20.868a12 12 0 0 1 -5.468 -4.868a12 12 0 0 1 0 -12a12 12 0 0 1 12 0a12 12 0 0 0 -4.5 9.5" /><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M19 21v1m0 -8v1" /></svg>`,
    },
    {
        title: "Precios Transparentes:",
        description: "Confianza mutua: contrate ahora, pague después. Olvídese de pagos por adelantado y sorpresas desagradables en la factura.",
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-invoice"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 7l1 0" /><path d="M9 13l6 0" /><path d="M13 17l2 0" /></svg>`,
    },
    {
        title: "Programación Flexible:",
        description: "Su tiempo es valioso. Nos adaptamos a su horario para que pueda recibir nuestros servicios sin interrumpir su negocio.",
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" /><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M15 3v4" /><path d="M7 3v4" /><path d="M3 11h16" /><path d="M18 16.496v1.504l1 1" /></svg>`,
    },
    {
        title: "Consulta Gratuita:",
        description: "Desea saber cómo podemos ayudarle a mejorar sus finanzas? Solicite una consulta sin compromiso. Uno de nuestros expertos evaluará sus necesidades y le ofrecerá un plan detallado.",
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>`,
    },
    {
        title: "Asistencia Urgente:",
        description: "¡Surgen imprevistos! ¿Necesita ayuda con sus impuestos de última hora o una consulta financiera urgente? ¡Llámenos! Nuestro equipo está disponible para ayudarle en cualquier momento.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone-call"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>`,
    },
    {
        title: "Contadores Expertos:",
        description: "Nuestro equipo está formado por profesionales con años de experiencia, dedicados a brindarle un servicio contable excepcional. Amamos lo que hacemos y se nota en la salud financiera de su negocio.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.434 -1.248l-1.127 -.9a1.5 1.5 0 0 0 -1.866 0l-1.127 .9a1 1 0 0 0 -.434 1.248l.993 2.649l-2.5 11z" /><path d="M10.5 7h3" /></svg>`,
    },
];

export { services };