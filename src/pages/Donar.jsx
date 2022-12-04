import React from "react"
import { HistorDonar } from "../Components/HistorDonar"
import { InitDonar } from "../Components/InitDonar"
import { SecPeticion } from "../Components/SecPeticion"

import { Row, Col} from 'react-bootstrap'

import { NavbarLogged } from "../Components/NavbarLogged"
import { Scroll } from "../Components/scroll"
export const Donar = () =>{


    return(
        <>
        <NavbarLogged/>
        <div >
        <Row>
          <Col><section className="container">
              <InitDonar/>
              
            </section>
          </Col>
          <Col>
              <section className="container">
                <HistorDonar/>
              </section>
          </Col>
        </Row>
          
         
        </div>
      </>
    )
}

