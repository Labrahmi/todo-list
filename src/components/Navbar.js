/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Navbar.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/10 22:36:48 by macbook           #+#    #+#             */
/*   Updated: 2023/03/13 01:49:32 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from 'react';
import Menu from './Menu.js';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import DiamondIcon from '@mui/icons-material/Diamond';
import WebStoriesIcon from '@mui/icons-material/WebStories';

class Nav extends React.Component {
    render() {
        return (
            <div className='w-full flex justify-center py-4 pt-8'>
                <nav className='w-[96%] rounded-lg p-2 px-4 flex justify-between items-center '>
                    <a href='./ ' className='flex'>
                        <WebStoriesIcon/>
                        <div><strong>Todo List</strong> <span className=''>1.0</span> </div>
                    </a>
                </nav>
            </div>
        );
    }
};

export default Nav