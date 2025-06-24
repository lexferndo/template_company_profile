import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";

export function GetInTouch() {
  return (
    <Paper shadow="0" radius="lg" px={{ base: 20, sm: 100 }} bg={"transparent"}>
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{
            backgroundImage:
              "linear-gradient(to right, #4F8025 ,rgb(144, 183, 110))",
          }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Informasi Kontak
          </Text>

          <ContactIconsList />
        </div>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="info@denext.co.id"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" color="#4F8025" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
