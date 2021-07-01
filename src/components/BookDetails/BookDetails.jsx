import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

export default function BookDetails(product) {
  const classes = useStyles();
  console.log(product)

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">{product.product.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography dangerouslySetInnerHTML={{__html: product.product.description}} variant="body2" color="textSecondary"></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}