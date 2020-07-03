import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useSession from '../hooks/useSession';
import Layout from '../components/Layout';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    minWidth: 345,
  },
}));

function SgProfile() {
  const classes = useStyles();
  const { session } = useSession({ redirectTo: '/login' });

  if (!session || session.isLoggedIn === false) {
    return <></>;
  }

  return (
    <Layout>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Your profile
              </Typography>
              <Typography variant="body2" color="textSecondary" component="ul">
                <li>{session.claims.username}</li>
                <li>{session.claims.firstName}</li>
                <li>{session.claims.lastName}</li>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Layout>
  );
}

export default SgProfile;
