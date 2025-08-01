import {
  Box,
  Button,
  Checkbox,
  Field,
  Fieldset,
  GridItem,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { Ref } from "react";
import { useForm, type FieldErrors, type FieldValues } from "react-hook-form";

interface Props {
  refElement?: Ref<HTMLDivElement>;
}

const Register = ({ refElement }: Props) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submitfn = (data: FieldValues) => {
    console.log(data);
    reset();
  }

  const errorHandleFn = (err: FieldErrors<FieldValues>) => {
    console.log(err);
  }

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

          <form onSubmit={handleSubmit((data) => submitfn(data), (err) => {errorHandleFn(err)})}>
            <Fieldset.Root size="lg" maxW="md">
              <Stack>
                <Fieldset.Legend>Contact details</Fieldset.Legend>
                <Fieldset.HelperText>
                  Please provide your details to register.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content>

                <Field.Root invalid={ errors.fname ? true : false} >
                  <Field.Label>First Name</Field.Label>
                  <Input as="input" {...register("fname", { required: true, minLength: 5 })} name="fname" borderRadius='20px' />
                  { errors.fname?.type == "required" && <Field.ErrorText>First Name is required</Field.ErrorText>}
                  { errors.fname?.type == "minLength" && <Field.ErrorText>Minimum length is 5 characters</Field.ErrorText>}
                </Field.Root>

                <Field.Root invalid={ errors.lname ? true : false} >
                  <Field.Label>Last Name</Field.Label>
                  <Input as="input" {...register("lname", { required: true, minLength: 5 })} name="lname" borderRadius='20px' />
                  { errors.lname?.type == "required" && <Field.ErrorText>Last Name is required</Field.ErrorText>}
                  { errors.lname?.type == "minLength" && <Field.ErrorText>Minimum length is 5 characters</Field.ErrorText>}
                </Field.Root>

                <Field.Root invalid={ errors.job_title ? true : false}>
                  <Field.Label>Job Title</Field.Label>
                  <Input {...register("job_title", { required: true, minLength: 5 })} name="job_title" borderRadius='20px' />
                  { errors.job_title?.type == "required" && <Field.ErrorText>Job Title is required</Field.ErrorText>}
                  { errors.job_title?.type == "minLength" && <Field.ErrorText>Minimum length is 5 characters</Field.ErrorText>}
                </Field.Root>

                <Field.Root invalid={ errors.company ? true : false}>
                  <Field.Label>Company</Field.Label>
                  <Input {...register("company", { required: true, minLength: 5 })} name="company" borderRadius='20px' />
                  { errors.company?.type == "required" && <Field.ErrorText>Company name is required</Field.ErrorText>}
                  { errors.company?.type == "minLength" && <Field.ErrorText>Minimum length is 5 characters</Field.ErrorText>}
                </Field.Root>

                <Field.Root invalid={ errors.mobile ? true : false}>
                  <Field.Label>Mobile No</Field.Label>
                  <Input {...register("mobile", { required: true, minLength: 10, maxLength: 10, pattern: /^0[0-9]{9}$/ })} name="mobile" type="number" borderRadius='20px' />
                  { errors.mobile?.type == "required" && <Field.ErrorText>Mobile No is required</Field.ErrorText>}
                  { errors.mobile?.type == "minLength" && <Field.ErrorText>Minimum length is 10 numbers</Field.ErrorText>}
                  { errors.mobile?.type == "maxLength" && <Field.ErrorText>Maximum length is 10 numbers</Field.ErrorText>}
                  { errors.mobile?.type == "pattern" && <Field.ErrorText>Mobile no must start with 0</Field.ErrorText>}
                </Field.Root>

                <Field.Root invalid={ errors.email ? true : false}>
                  <Field.Label>Email</Field.Label>
                  <Input {...register("email", { required: true })} name="email" type="email" borderRadius='20px' />
                  { errors.email?.type == "required" && <Field.ErrorText>E-mail is required</Field.ErrorText>}
                  { errors.email?.type == "minLength" && <Field.ErrorText>Minimum length is 5 characters</Field.ErrorText>}
                </Field.Root>

                <Checkbox.Root colorPalette='pink' variant='solid' invalid={ errors.chkbox ? true : false} >
                  <Checkbox.HiddenInput {...register("chkbox", { required: true })} />
                  <Checkbox.Control />
                  <Checkbox.Label textStyle={'xs'}>
                    By filling out the registration form to attend our event, you agree and consent to{" "}
                    <Link colorPalette="pink" href="https://cogentsolutions.ae/privacy-policy">
                      Cogent Solutions Privacy Policy.
                    </Link>
                  </Checkbox.Label>
                </Checkbox.Root>

              </Fieldset.Content>

              <Button width='100%' borderRadius='20px' type="submit" className="!bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 hover:scale-105 !transition-all !duration-300">
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
