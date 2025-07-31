import {
  Box,
  Button,
  Field,
  Fieldset,
  GridItem,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import type { Ref } from "react";

interface Props {
  refElement?: Ref<HTMLDivElement>;
}

const Register = ({ refElement }: Props) => {
  return (
    <Box className="!bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300" paddingY='100px' ref={refElement}>
      <SimpleGrid
        marginX="auto"
        columns={{ sm: 1, xl: 3 }}
        gap={10}
        width="95%"
        paddingX={{ base: 4, md: 6, lg: 10, xl: 20 }}
      >
        <GridItem colSpan={{ sm: 1, xl: 1 }}>
          <h1
            className="!text-[3.5rem] !text-center !pb-10 !font-extrabold !bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 !bg-clip-text !text-transparent"
            // initial='hidden'
            // variants={topAnimationHeader}
            // whileInView='visible'
            // viewport={{ once: false }}
          >
            Register
          </h1>
        </GridItem>

        <GridItem colSpan={{ sm: 1, xl: 2 }}>
          <form>
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              <Fieldset.Legend>Contact details</Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide your details to register.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>

              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input name="name" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Job Title</Field.Label>
                <Input name="job_title" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Company</Field.Label>
                <Input name="company" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Mobile No</Field.Label>
                <Input name="company" type="number" max={10} min={10} />
              </Field.Root>

              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input name="email" type="email" />
              </Field.Root>

            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-start">
              Register
            </Button>
          </Fieldset.Root>
          </form>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Register;
