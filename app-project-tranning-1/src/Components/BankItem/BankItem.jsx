
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BankDetail from '../BankDetail/BankDetail';
import { ActiveCard } from './BankItem.style';
import { Inactive } from './BankItem.style';

export default function BankItem(props) {

  const [idBank, setIdBank] = useState(0)
  const { dataCountryBank } = props;
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    onClickBank()
  }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onClickBank = (bankId) => {
    setIdBank(bankId);
  }


  const bankItem = dataCountryBank?.map((bank) => {
    const { id, name, isActive } = bank;

    return <Accordion onClick={() => onClickBank(id)} key={id} expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '90%', height: "80px", flexShrink: 0, display: "flex", position: "relative", textAlign: "center", alignItems: "center" }}>
          {name}
          {isActive ?
            (<ActiveCard>
              Active
            </ActiveCard>)
            : (<Inactive>
              Inactive
            </Inactive>)}

        </Typography>

      </AccordionSummary>
      <AccordionDetails >
        <Typography>
          <BankDetail idBank={idBank} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  })


  return (
    <div >
      {bankItem}
    </div >
  );
}
