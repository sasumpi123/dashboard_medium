// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

function UserInfo(props) {
    const { loginUser } = props;
    const { userName, userEmail, lastUpdate, src } = loginUser

    const lastUpdateDate = new Date(lastUpdate);
    const now = new Date();
    const dateDiff = Math.ceil((now.getTime() - lastUpdateDate.getTime()) / (1000 * 3600 * 24)) - 1;
    return (
        <MDBox position="relative" mb={1}>
            <Card
                sx={{
                    position: "relative",
                    mt: 0,
                    mx: -2,
                    my: -2,
                    py: 7,
                    px: 4,
                }}
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item>
                        <MDAvatar src={src} alt="profile-image" size="xl" shadow="sm" />
                    </Grid>
                    <Grid item>
                        <MDBox height="100%" mt={0.5} lineHeight={1}>
                            <MDTypography variant="h5" fontWeight="medium">
                                {userName}
                            </MDTypography>
                            <MDTypography variant="h6" color="text" fontWeight="regular">
                                {userEmail}
                            </MDTypography>
                            <MDTypography variant="button" color="text" fontWeight="regular">
                                Last Updated {dateDiff} days ago
                            </MDTypography>

                        </MDBox>
                    </Grid>
                </Grid>
            </Card>
        </MDBox>
    );
}

export default UserInfo;
