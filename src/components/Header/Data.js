import React from 'react'


import * as RiIcons from 'react-icons/ri';
import {GiGraduateCap} from "react-icons/gi";
import {Gi3DGlasses} from "react-icons/gi";
import {IoIosHammer} from "react-icons/io"
import {FaPencilAlt} from "react-icons/fa"
export const Data = [
    {
        icon: <GiGraduateCap />,
        title: 'Cursos',
        path: '/cursos',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        submenu: [
            {
                title: 'Graduação',
                path: '/cursos/graduacao'
            },
            {
                title: 'Pós-Graduação',
                path: '/cursos/posGraduacao'
            },
            {
                title: 'MBA',
                path: '/cursos/mba'
            },
            {
                title: 'Mestrado',
                path: '/cursos/mestrado'
            },
            {
                title: 'Curosos Livres',
                path: '/cursos/curososLivres'
            }

        ]
    },

    {
        icon: <Gi3DGlasses />,
        title: 'Sobre',
        path: '/sobre',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        submenu: [
            {
                title: 'Nossa Historia',
                path: '/sobre/nossaHistoria'
            },
            {
                title: 'Unidades',
                path: '/sobre/unidades'
            },
            {
                title: 'Sustentabilidade',
                path: '/sobre/sustentabilidade'
            },
            {
                title: 'Trabalhe Conosco',
                path: '/sobre/trabalheConosco'
            },

        ]
    },
    {
        icon: <IoIosHammer />,
        title: 'Serviços',
        path: '/servicos',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        submenu: [
            {
                title: 'Biblioteca',
                path: '/servicos/biblioteca'
            },
            {
                title: 'Carreiras',
                path: '/servicos/Carreiras'
            },
            {
                title: 'Colação de Grau',
                path: '/servicos/ColaçãoDeGrau'
            },
            {
                title: 'Eventos',
                path: '/servicos/Eventos'
            },
            {
                title: 'Educação Inclusiva',
                path: '/servicos/EducaçãoInclusiva'
            }
        ]

    },
    {   
        icon: <FaPencilAlt />,
        title: 'Increva-se',
        path: '/increvase'
    }

]