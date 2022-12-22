
import './App.css';
import Receta from './Componentes/Receta.js';

function App() {
  return (
    <div className="App">
      <h1> Mis recetas favoritas </h1>
      
      <Receta
      nombre='Seitan Asado'
      ingredientes='Gluten puro: una taza •harina integral: un cuarto de taza  agua, salsa de soja y condimentos a gusto'
      pasos='Mezclar el gluten con el harina integral. Mezclar media taza de salsa de soja con media 
      taza de agua e incorporar a la mezcla seca. Poner suficiente agua a hervir. Una vez amasado hervir
       aproximadamente 1.30 hs. Luego se puede usar para cocinar o asar de cualquier manera. Mi favorita es salteada con
       vegetales y barbacoa o trozada y salteada con especias para tacos.'
      imagen='Vegan-Celebration-Seitan-Roast-4-scaled.webp'/>

      <Receta
      nombre='Leche de Castañas'
      ingredientes='Castañas de cajú:300gs, agua:1lt '
      pasos='Dejar las castañas en remojo 8 horas, lavarlas y procesarlas incorporando de a poco el litro de agua, filtrar y servir.'
      imagen='leche-vegetal-fortificada-12.jpg'/>

      
<Receta
      nombre='Ramen de Tofu'
      ingredientes='Tofu, fideos de arroz, ajo, genjibre, salsa de soja, verdeo, algas, condimentos y sal a gusto '
      pasos='Saltear el tofu hasta que este dorado. Por otro lado saltear ajo y jenjibre con los vegetales elejidos y salsa de soja, agregar agua una vez que estan dorados y formar un caldo, incorporar ahi mismo el tofu, los fideos y los condimentos. Recordar no incorporar los fideos hasta que todos los vegetales esten cocinados en caso de agregar papas, batatas o zapallo. Servir, cortar e incorporar las algas. Adornar con un poco de verdeo picado al final.'
      imagen='images.jpeg'/>
   
   
    </div>
  );
}

export default App;
