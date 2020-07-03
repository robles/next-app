import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Copyright from '../components/Copyright';
import Layout from '../components/Layout';
// import ProTip from '../components/ProTip';
// import Link from '../components/Link';

const useStyles = makeStyles(() => ({
  box: {
    textAlign: 'center',
  },
}));

function Index() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box className={classes.box} my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Home Page
          </Typography>
          {/* <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip /> */}
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}

export default Index;
