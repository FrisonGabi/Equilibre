import styled from "styled-components"
import Pregunta from "./Pregunta"


const Container = styled.div`
    width:80%;
    margin:auto;  
    margin-top:70px;
    height:auto;
    
`


const Faq = () => {

    return(
        <Container>
            <Pregunta pregunta={"¿Como es la modalidad de trabajo?"} respuesta={
                `
                El tratamiento tiene como finalidad ayudarlos a mejorar sus hábitos alimentarios, buscando como objetivo final cambios saludables que puedan mantener en el tiempo, y que ese aprendizaje puedan transmitirlo también a su familia.
                En personas que busquen o necesiten bajar de peso, el eje del tratamiento no está enfocado en la balanza (si bajaron o no de peso), sino que se trabaja principalmente en cambiar hábitos alimentarios y poder mejorarlos día a día; el descenso de peso se va a ir dando paulatinamente como consecuencia del cambio de hábitos y de la constancia en los mismos.
                Nuestro objetivo es enseñarles y acompañarlos en este proceso de mejorar su alimentación.
                Se realizan planes de alimentación adaptados a tus necesidades, gustos y preferencias con orientación NO RESTRICTIVA, buscando mejorar tu alimentación, sin dejar de lado aquellos alimentos que te gustan.
                La atención puede ser de manera presencial u online, según preferencia de cada uno, en ambos casos trabajamos de la misma manera.
                `}/>
            <Pregunta pregunta={"¿Qué incluye la primer consulta?"} respuesta={
                `
                En la primer consulta, se realiza una entrevista para conocer tus hábitos alimentarios actuales, si realizás o no algún tipo de actividad física y si hay o no presencia de alguna patología a tratar. Si la consulta es presencial realizamos bioimpedancia (obtenemos peso corporal y % de grasa corporal y masa muscular). En el caso que sea online, se explica cómo tomar algunas medidas o se pueden utilizar fotos.
                En base a toda esa información, se realiza un plan de alimentación personalizado teniendo en cuenta necesidades individuales, y se establecen objetivos a trabajar en las próximas consultas. 
                
                
                `
            }
            respuesta2={"Incluye plan alimentario y recetario saludable."}
            />
            <Pregunta pregunta={"¿Cada cuánto es la frecuencia de controles?"} respuesta={
                `
                La frecuencia de los mismos se define con cada paciente, puede ser semanal, cada 15/20 días o mensual).
                `
            }/>
            <Pregunta pregunta={"¿Qué son las antropometrías?"} respuesta={
                `
                Como el público se va renovando, hoy queremos aprovechar para contarles un poco sobre ANTROPOMETRÍA 
                La misma, consiste en una serie de mediciones técnicas, que expresan cuantitativamente las dimensiones del cuerpo, la cual nos permite valorar la cantidad y distribución de grasa, músculo, huesos, etc.
                Gracias a esta técnica podemos establecer objetivos de trabajo con cada individuo en base a su composición corporal y de esta forma buscar una mejora ya sea en su salud o su rendimiento deportivo.
                `
            }/>
        </Container>
    )
}

export default Faq