import React, { useState, useEffect } from 'react';
import './style_painel.css';
import confetti from 'canvas-confetti';

// Importe todas as imagens necessárias
import img01 from './images/_rg/01.png';
import img02 from './images/_rg/02.png';
import img03 from './images/_rg/03.png';
import img04 from './images/_rg/04.png';
import img05 from './images/_rg/05.png';
import img06 from './images/_rg/06.png';
import img07 from './images/_rg/07.png';
import img08 from './images/_rg/08.png';
import img09 from './images/_rg/09.png';
import img10 from './images/_rg/10.png';
import img11 from './images/_rg/11.png';
import img12 from './images/_rg/12.png';
import img13 from './images/_rg/13.png';
import img14 from './images/_rg/14.png';
import img15 from './images/_rg/15.png';
import img16 from './images/_rg/16.png';
import img17 from './images/_rg/17.png';
import img18 from './images/_rg/18.png';
import img19 from './images/_rg/19.png';
import img20 from './images/_rg/20.png';
import img21 from './images/_rg/21.png';
import img22 from './images/_rg/22.png';
import img23 from './images/_rg/23.png';
import img24 from './images/_rg/24.png';
import img25 from './images/_rg/25.png';

import blur01 from './images/_blurContainer/01.png';
import blur02 from './images/_blurContainer/02.png';
import blur03 from './images/_blurContainer/03.png';
import blur04 from './images/_blurContainer/04.png';
import blur05 from './images/_blurContainer/05.png';
import blur06 from './images/_blurContainer/06.png';
import blur07 from './images/_blurContainer/07.png';
import blur08 from './images/_blurContainer/08.png';
import blur09 from './images/_blurContainer/09.png';
import blur10 from './images/_blurContainer/10.png';
import blur11 from './images/_blurContainer/11.png';
import blur12 from './images/_blurContainer/12.png';
import blur13 from './images/_blurContainer/13.png';
import blur14 from './images/_blurContainer/14.png';
import blur15 from './images/_blurContainer/15.png';
import blur16 from './images/_blurContainer/16.png';
import blur17 from './images/_blurContainer/17.png';
import blur18 from './images/_blurContainer/18.png';
import blur19 from './images/_blurContainer/19.png';
import blur20 from './images/_blurContainer/20.png';
import blur21 from './images/_blurContainer/21.png';
import blur22 from './images/_blurContainer/22.png';
import blur23 from './images/_blurContainer/23.png';
import blur24 from './images/_blurContainer/24.png';
import blur25 from './images/_blurContainer/25.png';

// Importe todos os áudios (adicione isso junto com as importações de imagens)
import audio01 from './audios/01.mp3';
import audio02 from './audios/02.mp3';
import audio03 from './audios/03.mp3';
import audio04 from './audios/04.mp3';
import audio05 from './audios/05.mp3';
import audio06 from './audios/06.mp3';
import audio07 from './audios/07.mp3';
import audio08 from './audios/08.mp3';
import audio09 from './audios/09.mp3';
import audio10 from './audios/10.mp3';
import audio11 from './audios/11.mp3';
import audio12 from './audios/12.mp3';
import audio13 from './audios/13.mp3';
import audio14 from './audios/14.mp3';
import audio15 from './audios/15.mp3';
import audio16 from './audios/16.mp3';
import audio17 from './audios/17.mp3';
import audio18 from './audios/18.mp3';
import audio19 from './audios/19.mp3';
import audio20 from './audios/20.mp3';
import audio21 from './audios/21.mp3';
import audio22 from './audios/22.mp3';
import audio23 from './audios/23.mp3';
import audio24 from './audios/24.mp3';
import audio25 from './audios/25.mp3';


// Mapeamento de imagens
const images = {
  rg: {
    '01': img01, '02': img02, '03': img03, '04': img04, '05': img05,
    '06': img06, '07': img07, '08': img08, '09': img09, '10': img10,
    '11': img11, '12': img12, '13': img13, '14': img14, '15': img15,
    '16': img16, '17': img17, '18': img18, '19': img19, '20': img20,
    '21': img21, '22': img22, '23': img23, '24': img24, '25': img25
  },
  blurContainer: {
    '01': blur01, '02': blur02, '03': blur03, '04': blur04, '05': blur05,
    '06': blur06, '07': blur07, '08': blur08, '09': blur09, '10': blur10,
    '11': blur11, '12': blur12, '13': blur13, '14': blur14, '15': blur15,
    '16': blur16, '17': blur17, '18': blur18, '19': blur19, '20': blur20,
    '21': blur21, '22': blur22, '23': blur23, '24': blur24, '25': blur25
  }
};

// Crie um objeto de mapeamento de áudios (junto com o objeto images)
const audios = {
  '01': audio01, '02': audio02, '03': audio03, '04': audio04, '05': audio05,
  '06': audio06, '07': audio07, '08': audio08, '09': audio09, '10': audio10,
  '11': audio11, '12': audio12, '13': audio13, '14': audio14, '15': audio15,
  '16': audio16, '17': audio17, '18': audio18, '19': audio19, '20': audio20,
  '21': audio21, '22': audio22, '23': audio23, '24': audio24, '25': audio25
};

// Componente principal
const Painel = () => {
  // Estado para armazenar os dados dos prêmios
  const [estados, setEstados] = useState({
    rio: {
      milhar1: '', milhar2: '', milhar3: '', milhar4: '', milhar5: '', milhar6: '', milhar7: '',
      grupo1: '', grupo2: '', grupo3: '', grupo4: '', grupo5: '', grupo6: '', grupo7: '',
      nome1: '', nome2: '', nome3: '', nome4: '', nome5: '', nome6: '', nome7: '',
      img1: '', img2: '', img3: '', img4: '', img5: '', img6: '', img7: ''
    },
    goias: {
      milhar1: '', milhar2: '', milhar3: '', milhar4: '', milhar5: '', milhar6: '', milhar7: '',
      grupo1: '', grupo2: '', grupo3: '', grupo4: '', grupo5: '', grupo6: '', grupo7: '',
      nome1: '', nome2: '', nome3: '', nome4: '', nome5: '', nome6: '', nome7: '',
      img1: '', img2: '', img3: '', img4: '', img5: '', img6: '', img7: ''
    }
  });

  // Estado para o container de informações
  const [showBlurContainer, setShowBlurContainer] = useState(false);
  const [blurImage, setBlurImage] = useState('');
  const [grupoInfo, setGrupoInfo] = useState({ numero: '', dezenas: '' });
    // Estado para o container de informações
    const [blurContainer, setBlurContainer] = useState({
      show: false,
      image: '',
      grupoNumero: '',
      grupoDezenas: ''
    });
  
  // Estado para os campos de resultado
  const [resultadoInput, setResultadoInput] = useState({
    rio: '',
    goias: ''
  });

  // Atualiza os campos de resultado baseado no horário atual
  useEffect(() => {
    updateResultadoInput();
  }, []);

  // Função para verificar se todos os campos de 1 a 5 estão preenchidos
  const verificarCamposPreenchidos = (estado) => {
    return [1, 2, 3, 4, 5].every(i => {
      const value = estados[estado][`milhar${i}`];
      return value && value.length === 4;
    });
  };

  // Função para calcular o 6º prêmio (soma dos 5 primeiros)
  const calculateSextoPremio = (estado) => {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
      const value = estados[estado][`milhar${i}`];
      if (!value || value.length !== 4) return '';
      soma += parseInt(value);
    }
    return soma.toString().slice(-4).padStart(4, '0');
  };

  // Função para calcular o 7º prêmio (multiplicação 1º × 2º)
  const calculateSetimoPremio = (estado) => {
    const premio1 = estados[estado].milhar1;
    const premio2 = estados[estado].milhar2;
    
    if (!premio1 || premio1.length !== 4 || !premio2 || premio2.length !== 4) return '';
    
    const resultado = (parseInt(premio1) * parseInt(premio2)).toString();
    return resultado.slice(-6, -3).padStart(3, '0');
  };

  // Função para mover para o próximo campo quando atingir o tamanho máximo
  const moverParaProximo = (e, estado, rowIndex, maxLength) => {
    if (e.target.value.length >= maxLength) {
      const inputs = e.target.closest("tbody").querySelectorAll("input.tab-resultado:not([disabled])");
      const indiceAtual = Array.from(inputs).indexOf(e.target);
      if (indiceAtual < inputs.length - 1) {
        const proximoCampo = inputs[indiceAtual + 1];
        proximoCampo.focus();
      }
    }
  };

 // Atualiza o container de informações para o primeiro prêmio do Rio
 const updateBlurContainerImage = (estado, rowIndex, value) => {
  if (estado === 'rio' && rowIndex === 1 && value.length === 4) {
    const dezenaBicho = value.substring(2);
    const grupo = getGrupo(dezenaBicho);

    if (grupo) {
      const paddedNumber = grupo.padStart(2, '0');
      
      setBlurContainer({
        show: true,
        image: images.blurContainer[paddedNumber],
        grupoNumero: `Grupo ${grupo}`,
        grupoDezenas: getDezenas(grupo)
      });

      confetti();
      playAudio(grupo);
    }
  } else if (estado === 'rio' && rowIndex === 1) {
    setBlurContainer({
      show: false,
      image: '',
      grupoNumero: '',
      grupoDezenas: ''
    });
  }
};

  // Retorna as dezenas correspondentes a um grupo
  const getDezenas = (grupo) => {
    const dezenas = {
      '01': '01-02-03-04', '02': '05-06-07-08', '03': '09-10-11-12',
      '04': '13-14-15-16', '05': '17-18-19-20', '06': '21-22-23-24',
      '07': '25-26-27-28', '08': '29-30-31-32', '09': '33-34-35-36',
      '10': '37-38-39-40', '11': '41-42-43-44', '12': '45-46-47-48',
      '13': '49-50-51-52', '14': '53-54-55-56', '15': '57-58-59-60',
      '16': '61-62-63-64', '17': '65-66-67-68', '18': '69-70-71-72',
      '19': '73-74-75-76', '20': '77-78-79-80', '21': '81-82-83-84',
      '22': '85-86-87-88', '23': '89-90-91-92', '24': '93-94-95-96',
      '25': '97-98-99-00'
    };
    return dezenas[grupo] || '';
  };

  // Toca o áudio correspondente ao grupo
// Modifique a função playAudio
const playAudio = (grupo) => {
  if (!grupo) return;
  const paddedNumber = grupo.padStart(2, '0');
  
  // Verifica se o áudio existe no objeto
  if (!audios[paddedNumber]) {
    console.error(`Áudio para o grupo ${grupo} não encontrado`);
    return;
  }
  
  const audio = new Audio(audios[paddedNumber]);
  audio.play().catch(error => console.error("Erro ao reproduzir o áudio:", error));
};

  // Atualização do handleInputChange - VERSÃO CORRIGIDA
  const handleInputChange = (estado, rowIndex, value) => {
    const maxLength = rowIndex === 7 ? 3 : 4;
    const numericValue = value.replace(/\D/g, '').slice(0, maxLength);

    setEstados(prev => {
      // Primeiro, atualiza o estado com o novo valor
      const newState = {
        ...prev,
        [estado]: {
          ...prev[estado],
          [`milhar${rowIndex}`]: numericValue
        }
      };

      // Atualiza os campos do prêmio atual se estiver completo
      if (numericValue.length === maxLength) {
        const dezena = rowIndex === 7 ? numericValue.substring(1) : numericValue.substring(2);
        const grupo = getGrupo(dezena);
        
        newState[estado][`grupo${rowIndex}`] = grupo;
        newState[estado][`nome${rowIndex}`] = getNomeBicho(grupo);
        newState[estado][`img${rowIndex}`] = grupo ? images.rg[grupo.padStart(2, '0')] : '';

        // Efeito especial para o primeiro prêmio do Rio
        if (estado === 'rio' && rowIndex === 1) {
          updateBlurContainerImage(estado, rowIndex, numericValue);
        }
      } else {
        // Limpa se não estiver completo
        newState[estado][`grupo${rowIndex}`] = '';
        newState[estado][`nome${rowIndex}`] = '';
        newState[estado][`img${rowIndex}`] = '';
      }

      // Verifica se todos os campos de 1 a 5 estão preenchidos para calcular o 6º prêmio
      const todosPreenchidos = [1, 2, 3, 4, 5].every(i => {
        return newState[estado][`milhar${i}`] && newState[estado][`milhar${i}`].length === 4;
      });

      if (todosPreenchidos) {
        // Calcula o 6º prêmio (soma dos 5 primeiros)
        let soma = 0;
        for (let i = 1; i <= 5; i++) {
          soma += parseInt(newState[estado][`milhar${i}`]);
        }
        const sextoPremio = soma.toString().slice(-4).padStart(4, '0');
        const dezena6 = sextoPremio.substring(2);
        const grupo6 = getGrupo(dezena6);
        
        newState[estado].milhar6 = sextoPremio;
        newState[estado].grupo6 = grupo6;
        newState[estado].nome6 = getNomeBicho(grupo6);
        newState[estado].img6 = grupo6 ? images.rg[grupo6.padStart(2, '0')] : '';

        // Se for o 5º prêmio que foi preenchido, também calcula o 7º prêmio
        if (rowIndex === 5) {
          const premio1 = newState[estado].milhar1;
          const premio2 = newState[estado].milhar2;
          
          if (premio1 && premio2) {
            const resultado = (parseInt(premio1) * parseInt(premio2)).toString();
            const setimoPremio = resultado.slice(-6, -3).padStart(3, '0');
            const dezena7 = setimoPremio.substring(1);
            const grupo7 = getGrupo(dezena7);
            
            newState[estado].milhar7 = setimoPremio;
            newState[estado].grupo7 = grupo7;
            newState[estado].nome7 = getNomeBicho(grupo7);
            newState[estado].img7 = grupo7 ? images.rg[grupo7.padStart(2, '0')] : '';
          }
        }
      } else {
        // Se não estiverem todos preenchidos, limpa o 6º e 7º prêmios
        newState[estado].milhar6 = '';
        newState[estado].grupo6 = '';
        newState[estado].nome6 = '';
        newState[estado].img6 = '';
        
        newState[estado].milhar7 = '';
        newState[estado].grupo7 = '';
        newState[estado].nome7 = '';
        newState[estado].img7 = '';
      }

      return newState;
    });
  };

  // Retorna o grupo correspondente a uma dezena
  const getGrupo = (dezenaBicho) => {
    if (!dezenaBicho) return '';
    const num = parseInt(dezenaBicho);
    
    if (num >= 1 && num <= 4) return '01';
    if (num >= 5 && num <= 8) return '02';
    if (num >= 9 && num <= 12) return '03';
    if (num >= 13 && num <= 16) return '04';
    if (num >= 17 && num <= 20) return '05';
    if (num >= 21 && num <= 24) return '06';
    if (num >= 25 && num <= 28) return '07';
    if (num >= 29 && num <= 32) return '08';
    if (num >= 33 && num <= 36) return '09';
    if (num >= 37 && num <= 40) return '10';
    if (num >= 41 && num <= 44) return '11';
    if (num >= 45 && num <= 48) return '12';
    if (num >= 49 && num <= 52) return '13';
    if (num >= 53 && num <= 56) return '14';
    if (num >= 57 && num <= 60) return '15';
    if (num >= 61 && num <= 64) return '16';
    if (num >= 65 && num <= 68) return '17';
    if (num >= 69 && num <= 72) return '18';
    if (num >= 73 && num <= 76) return '19';
    if (num >= 77 && num <= 80) return '20';
    if (num >= 81 && num <= 84) return '21';
    if (num >= 85 && num <= 88) return '22';
    if (num >= 89 && num <= 92) return '23';
    if (num >= 93 && num <= 96) return '24';
    if ((num >= 97 && num <= 99) || num === 0) return '25';
    return '';
  };

  // Retorna o nome do bicho correspondente a um grupo
  const getNomeBicho = (grupo) => {
    const bichos = {
      '01': 'Avestruz', '02': 'Águia', '03': 'Burro', '04': 'Borboleta',
      '05': 'Cachorro', '06': 'Cabra', '07': 'Carneiro', '08': 'Camelo',
      '09': 'Cobra', '10': 'Coelho', '11': 'Cavalo', '12': 'Elefante',
      '13': 'Galo', '14': 'Gato', '15': 'Jacaré', '16': 'Leão',
      '17': 'Macaco', '18': 'Porco', '19': 'Pavão', '20': 'Peru',
      '21': 'Touro', '22': 'Tigre', '23': 'Urso', '24': 'Veado',
      '25': 'Vaca'
    };
    return bichos[grupo] || '';
  };

  // Atualiza os campos de resultado baseado no horário atual
  const updateResultadoInput = () => {
    const now = new Date();
    const hours = now.getHours();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateStr = `${day}/${month}/${year}`;

    // Determina qual resultado mostrar baseado no horário
    const getResultado = (times) => {
      if (hours >= 7 && hours < 10) return times[0];
      if (hours >= 10 && hours < 13) return times[1];
      if (hours >= 13 && hours < 15) return times[2];
      if (hours >= 15 && hours < 17) return times[3];
      if (hours >= 17 && hours < 19) return times[4];
      return times[5];
    };

    const rioTimes = [
      { name: 'PPT Rio 09:20' }, { name: 'PTM Rio 11:20' },
      { name: 'PT Rio 14:20' }, { name: 'PTV Rio 16:20' },
      { name: 'PTN Rio 18:20' }, { name: 'COR Rio 21:20' }
    ];

    const goiasTimes = [
      { name: 'PPT Goiás 09:20' }, { name: 'PTM Goiás 11:20' },
      { name: 'PT Goiás 14:20' }, { name: 'PTV Goiás 16:20' },
      { name: 'PTN Goiás 18:20' }, { name: 'COR Goiás 21:20' }
    ];

    setResultadoInput({
      rio: `${getResultado(rioTimes).name} ${dateStr}`,
      goias: `${getResultado(goiasTimes).name} ${dateStr}`
    });
  };

  // Renderiza uma linha da tabela
  const renderInputRow = (estado, rowIndex) => {
    const maxLength = rowIndex === 7 ? 3 : 4;
    const disabled = rowIndex === 6; // 6º prêmio é sempre desabilitado (calculado automaticamente)

    return (
      <tr key={`${estado}_row${rowIndex}`}>
        <td className="tab-placement">{rowIndex}º</td>
        <td className="tab-img">
          <div className="avatar-container">
            {estados[estado][`img${rowIndex}`] && (
              <img 
                src={estados[estado][`img${rowIndex}`]} 
                alt="" 
                id={`${estado}_img${rowIndex}`}
                style={{ display: 'inline' }}
              />
            )}
          </div>
        </td>
        <td>
          <input
            id={`${estado}_milhar${rowIndex}`}
            type="text"
            className="tab-resultado"
            value={estados[estado][`milhar${rowIndex}`]}
            onChange={(e) => handleInputChange(estado, rowIndex, e.target.value)}
            onKeyUp={(e) => moverParaProximo(e, estado, rowIndex, maxLength)}
            maxLength={maxLength}
            disabled={disabled}
            placeholder="PRÊMIO"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </td>
        <td>
          <input
            id={`${estado}_grupo${rowIndex}`}
            type="text"
            className="tab-grup"
            value={estados[estado][`grupo${rowIndex}`]}
            readOnly
            placeholder="GRUPO"
          />
        </td>
        <td>
          <input
            id={`${estado}_nome${rowIndex}`}
            type="text"
            className="tab-milhar"
            value={estados[estado][`nome${rowIndex}`]}
            readOnly
            placeholder="MILHAR"
          />
        </td>
      </tr>
    );
  };

  return (
    <div className="centralizar-container">
      {/* Painel do Rio de Janeiro */}
      <div className="containder">
        <h1 className="title-jb">Resultados RIO DE JANEIRO</h1>
        <input
          className="input-horaEData"
          maxLength="40"
          placeholder="Resultado da PT Rio 00/00/0000 00:30h"
          type="text"
          id="rio_resultadoInput"
          value={resultadoInput.rio}
          disabled
        />

        <table className="table-content">
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map(rowIndex => renderInputRow('rio', rowIndex))}
          </tbody>
        </table>
      </div>

      {/* Container de informações (mostra grupo e dezenas do 1º prêmio do Rio) */}
      <div className="container-info">
        {blurContainer.show && (
          <>
            <div id="blur-container" className="blur-container visible">
              <img id="premio-image" src={blurContainer.image} alt="Imagem do Prêmio" />
            </div>
            <div id="grupo-info">
              <h3 className="Grupo-numero">{blurContainer.grupoNumero}</h3>
              <p className="title-dezenas">Dezenas</p>
              <p className="grupo-dezenas">{blurContainer.grupoDezenas}</p>
            </div>
          </>
        )}
      </div>

      {/* Painel de Goiás */}
      <div className="containder">
        <h1 className="title-jb">Resultados LOOK GOIÁS</h1>
        <input
          className="input-horaEData"
          maxLength="40"
          placeholder="Resultado da LOOK GOIÁS 00/00/0000 00:30h"
          type="text"
          id="goias_resultadoInput"
          value={resultadoInput.goias}
          disabled
        />

        <table className="table-content">
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map(rowIndex => renderInputRow('goias', rowIndex))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Painel;