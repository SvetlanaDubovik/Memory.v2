import { game } from './handleStartGame';
  
  export const handleCardClick = evt => {
    const target = evt.target;
    const block = target.parentNode;
    
    if(block.classList.contains('js-card')) {
      game.processCardClick(block);      
    }
  };  