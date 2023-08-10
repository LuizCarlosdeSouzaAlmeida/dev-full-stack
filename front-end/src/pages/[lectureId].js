import Head from "next/head";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  SvgIcon,
  Button,
  Box,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  Stack,
  CircularProgress,
  Paper,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLectureById, deleteLectureById } from "src/api/lecture-service";
import EditLectureModal from "src/sections/lectures/edit-lecture-modal";

const Page = () => {
  const router = useRouter();
  const { lectureId } = router.query;
  const [lecture, setLecture] = useState(null);
  const [open, setOpen] = useState(false);

  function extractVideoId(link) {
    const url = new URL(link);
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get("v");
  }

  function convertToEmbedLink(link) {
    const videoId = extractVideoId(link);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  const deleteClass = async () => {
    await deleteLectureById(lectureId);
    router.push("/");
  };

  useEffect(() => {
    const fetchLectureDetails = async () => {
      const lectureDetails = await getLectureById(lectureId);
      console.log(lectureDetails);
      setLecture(lectureDetails);
    };
    if (lectureId) {
      fetchLectureDetails();
    }
  }, [lectureId]);

  return lectureId != null ? (
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
          <Stack direction="row" justifyContent="space-between" spacing={4} sx={{ m: 4 }}>
            <Stack spacing={1}>
              <Typography variant="h4">{lecture?.name}</Typography>
              <Typography variant="subtitle">{lecture?.description}</Typography>
            </Stack>
            <div>
              <Button
                sx={{ mr: 4 }}
                startIcon={
                  <SvgIcon fontSize="small">
                    <PencilIcon />
                  </SvgIcon>
                }
                onClick={setOpen}
                variant="contained"
              >
                Editar
              </Button>

              <Button
                color="error"
                startIcon={
                  <SvgIcon fontSize="small">
                    <TrashIcon />
                  </SvgIcon>
                }
                onClick={deleteClass}
                variant="contained"
              >
                Excluir
              </Button>
            </div>
          </Stack>
          {lecture && (
            <Paper sx={{ p: 4 }} elevation={4}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <iframe
                  width="1280"
                  height="720"
                  src={convertToEmbedLink(lecture?.videoUrl)}
                  title={lecture.name}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen={true}
                ></iframe>
              </Box>
            </Paper>
          )}
          <Paper sx={{ w: 100, my: 4, p: 3 }} elevation={4}>
            <Typography variant="body1" sx={{ mt: 3 }}>
              {lecture?.text}
            </Typography>
          </Paper>
          <Paper sx={{ w: 100, p: 3 }} elevation={4}>
            {lecture?.downloadLinks.length && (
              <ul>
                <li>
                  {lecture.downloadLinks.map((downloadLink) => (
                    <a href={downloadLink}>{downloadLink}</a>
                  ))}
                </li>
              </ul>
            )}
          </Paper>
        </Container>
      </Box>
      {lecture && <EditLectureModal open={open} setOpen={setOpen} lecture={lecture} />}
    </>
  ) : (
    <CircularProgress />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
