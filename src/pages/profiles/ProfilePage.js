import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileContext";
import Image from "react-bootstrap/Image";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row className="px-3" md={{ span: 8, offset: 2 }}>
        <Col>
          <h3 className="m-2 text-center">{profile?.owner}</h3>
        </Col>
      </Row>
      <Row className="px-3 text-center" md={{ span: 8, offset: 2 }}>
        <Col md={3} className="text-lg-left">
          <Image roundedCircle src={profile?.image} />
        </Col>
      </Row>
      <Row className="px-3" md={{ span: 8, offset: 2 }}>
        {profile?.name && <Col className="p-3 text-center"><strong>Name: </strong>{profile.name}</Col>}
      </Row>
      <Row md={{ span: 8, offset: 2 }}>
      {profile?.description && <Col className="p-3 text-center"><strong>About me: </strong>{profile.description}</Col>}
      </Row>
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;