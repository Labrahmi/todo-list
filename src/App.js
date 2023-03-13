/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/10 22:36:51 by macbook           #+#    #+#             */
/*   Updated: 2023/03/13 00:49:46 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import "./CSS/index.css";
import Nav from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
