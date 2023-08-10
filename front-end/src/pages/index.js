import Head from "next/head";
import { useEffect, useState } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { LectureCard } from "src/sections/lectures/lecture-card";
import NewLectureModal from "src/sections/lectures/new-lecture-modal";
import { getLectures } from "src/api/lecture-service";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [lectures, setLectures] = useState([
    {
      name: "",
      description: "",
      hours: "",
      videoUrl: "",
      text: "",
      downloadLinks: [],
      linkInput: "",
    },
  ]);

  const fetchLectures = async () => {
    const lecturesData = await getLectures();
    setLectures(lecturesData);
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  return (
    <>
      <Head>
        <title>Companies | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Aulas</Typography>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={setOpen}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <Grid container spacing={3}>
              {lectures?.map((lecture) => (
                <Grid xs={12} md={6} lg={4} key={lecture.id}>
                  <LectureCard lecture={lecture} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
      <NewLectureModal open={open} setOpen={setOpen} fetchLectures={fetchLectures} />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
