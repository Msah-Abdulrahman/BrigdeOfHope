import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { React, useState, useEffect } from 'react';
import { MdOutlinePermMedia } from 'react-icons/md';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {
  Modal,
  TextField,
  FormLabel,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import Main from '../main';
import Iconify from '../../components/iconify';
import AccountPopover from '../common/account-popover';
import NotificationsPopover from '../common/notifications-popover';

export default function NavigationBar({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [donationFrequency, setDonationFrequency] = useState('once');
  const [donationAmount, setDonationAmount] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDonate = () => {
    console.log(`Donation frequency: ${donationFrequency}, amount: ${donationAmount}`);
    // Integrate your logic for donation here (API call etc.)
    handleCloseModal();
    // Optionally request for bank details after donation setup
  };

  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 100) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {isMobile ? (
        <>
          <Box
            sx={{
              minHeight: 1,
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <Main>{children}</Main>
          </Box>

          <AppBar
            sx={{ bgcolor: '#f1f3f4a9', color: 'black' }}
            position="fixed"
            style={{ top: 0, bottom: 'auto' }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bridge Of Hope
              </Typography>

              <Button
                sx={{
                  mt: 1,
                  bgcolor: '#e74c3c',
                  fontSize: '0.5rem', // Set the text size
                  // Apply styles to the icon via the '& .MuiSvgIcon-root' selector
                  '& .MuiSvgIcon-root': {
                    fontSize: '0.25rem', // Set the icon size
                  },
                }}
                variant="contained"
                onClick={handleOpenModal}
              >
                Donate Now
              </Button>
              <Box sx={{ flexGrow: 1 }} />
              <NotificationsPopover />
              <AccountPopover />
            </Toolbar>
          </AppBar>
          <BottomNavigation
            showLabels
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: theme.zIndex.appBar,
            }}
          >
            <BottomNavigationAction label="Home" icon={<Iconify icon="fluent:home-16-regular" />} />
            <BottomNavigationAction
              component={Link}
              to="/projects"
              label="Projects"
              icon={<Iconify icon="ant-design:fund-projection-screen-outlined" />}
            />
            <BottomNavigationAction
              label="Media"
              icon={<Iconify icon="material-symbols:perm-media-outline" />}
            />
            <BottomNavigationAction label="About Us" icon={<Iconify icon="uiw:user" />} />
          </BottomNavigation>
        </>
      ) : (
        <>
          <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? 'sticky' : 'navbar'}
          >
            <Container>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="/" className="d-flex">
                  <div>
                    <ul className={`text ${isHidden ? 'hidden' : ''}`}>
                      <li>B</li>
                      <li className="ghost">r</li>
                      <li className="ghost">i</li>
                      <li className="ghost">d</li>
                      <li className="ghost">g</li>
                      <li className="ghost">e</li>

                      <li className="spaced">O</li>
                      <li className="ghost">f</li>
                      <li className="spaced">H</li>
                      <li className="ghost">o</li>
                      <li className="ghost">p</li>
                      <li className="ghost">e</li>
                      <li className="spaced">G</li>
                      <li className="ghost">l</li>
                      <li className="ghost">o</li>
                      <li className="ghost">b</li>
                      <li className="ghost">a</li>
                      <li className="ghost">l</li>
                      <li className="spaced">P</li>
                      <li className="ghost">r</li>
                      <li className="ghost">o</li>
                      <li className="ghost">j</li>
                      <li className="ghost">e</li>
                      <li className="ghost">c</li>
                      <li className="ghost">t</li>
                      <li className="ghost">s</li>
                    </ul>
                  </div>
                </Navbar.Brand>

                <Nav className="ms-auto" defaultActiveKey="#home">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                      <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                      <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/media" onClick={() => updateExpanded(false)}>
                      <MdOutlinePermMedia style={{ marginBottom: '2px' }} /> Media
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                      <AiOutlineUser style={{ marginBottom: '2px' }} /> About us
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="fork-btn">
                    <Button
                      sx={{ mt: 1, bgcolor: '#e74c3c' }}
                      variant="contained"
                      onClick={handleOpenModal}
                      endIcon={<Iconify icon="la:donate" />}
                    >
                      Donate Now
                    </Button>

                    <Modal
                      open={showModal}
                      onClose={handleCloseModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Donate to Our Cause
                        </Typography>

                        <FormControl component="fieldset" sx={{ mt: 2 }}>
                          <FormLabel component="legend">Donation Frequency</FormLabel>

                          <ToggleButtonGroup
                            value={donationFrequency}
                            exclusive
                            onChange={(event, newFrequency) => {
                              if (newFrequency !== null) {
                                // Prevent deselection
                                setDonationFrequency(newFrequency);
                              }
                            }}
                            aria-label="donation frequency"
                            fullWidth
                            sx={{
                              mt: 1,
                              '.MuiToggleButtonGroup-grouped': {
                                mr: 0.5,
                                '&.Mui-selected': {
                                  color: 'white', // Text color of the selected button
                                  backgroundColor: '#e74c3c', // Background color of the selected button
                                  '&:hover': {
                                    backgroundColor: '#115293', // On hover, darken the color slightly
                                  },
                                },
                              },
                            }}
                          >
                            <ToggleButton value="once" aria-label="Once">
                              Once
                            </ToggleButton>
                            <ToggleButton value="monthly" aria-label="Monthly">
                              Monthly
                            </ToggleButton>
                            <ToggleButton value="quarterly" aria-label="Quarterly">
                              Quarterly
                            </ToggleButton>
                            <ToggleButton value="annually" aria-label="Annually">
                              Annually
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </FormControl>
                        <TextField
                          fullWidth
                          label="Donation Amount"
                          type="number"
                          variant="outlined"
                          value={donationAmount}
                          onChange={(event) => setDonationAmount(event.target.value)}
                          sx={{ mt: 2 }}
                        />
                        <Button
                          onClick={handleDonate}
                          sx={{ mt: 2, background: '#e74c3c' }}
                          variant="contained"
                        >
                          Donate
                        </Button>
                      </Box>
                    </Modal>
                  </Nav.Item>
                </Nav>

                <span style={{ paddingLeft: '50px' }} />
                <NotificationsPopover />
                <span style={{ paddingLeft: '0px' }} />

                <AccountPopover />
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Box
            sx={{
              minHeight: 1,
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <Main>{children}</Main>
          </Box>
        </>
      )}
    </>
  );
}

NavigationBar.propTypes = {
  children: PropTypes.node,
};
