import PropTypes from "prop-types";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useRouter } from "next/router";

export const LectureCard = (props) => {
  const router = useRouter();
  const { lecture } = props;
  const handleButtonClick = () => {
    router.push(`/${lecture.id}`); // Navegar para a nova rota quando o botão for clicado
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
        }}
        onClick={handleButtonClick}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 3,
            }}
          ></Box>
          <Typography align="center" gutterBottom variant="h5">
            {lecture.name}
          </Typography>
          <Typography align="center" variant="body1">
            {lecture.description}
          </Typography>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ p: 2 }}
        >
          <Stack alignItems="center" direction="row" spacing={1}>
            <SvgIcon color="action" fontSize="small">
              <ClockIcon />
            </SvgIcon>
            <Typography color="text.secondary" display="inline" variant="body2">
              {lecture.hours} hrs
            </Typography>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

LectureCard.propTypes = {
  lecture: PropTypes.object.isRequired,
};
