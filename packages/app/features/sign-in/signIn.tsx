'use client';
import { Button, Input, Form, XStack, YStack, H2, Label, Spinner } from 'tamagui';

import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useToastController } from '@my/ui';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default function Signin() {
  const { data: session } = useSession();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const toast = useToastController();

  const router = useRouter();

  const onSubmit = async data => {
    const { email, password } = data;

    try {
      const login = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (login?.ok) {
        toast.show('Successfully logged in');
        router.push('/dashboard');
      } else {
        toast.show('Invalid credentials. Please try again');
      }
    } catch (error) {
      console.error(error, 'error');
      toast.show('Something went wrong', error);
    }
  };

  return (
    <>
      <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
        <H2>Sign in</H2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <YStack width={350} minHeight={450} overflow="hidden" space="$2" margin="$3" padding="$2">
            <Label htmlFor="email">Email Address</Label>
            <XStack alignItems="center" space="$2" mt={6} mb={6}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    size="$3"
                    placeholder="Email"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    width={'100%'}
                  />
                )}
                name="email"
                defaultValue=""
              />
              {errors.email && <p>{errors.email.message}</p>}
            </XStack>
            <Label htmlFor="password">Password</Label>
            <XStack alignItems="center" space="$2" mt={6} mb={6}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    size="$3"
                    placeholder="Password"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry
                    width={'100%'}
                  />
                )}
                name="password"
                defaultValue=""
              />

              {errors.password && <p>{errors.password.message}</p>}
            </XStack>
           
            <Form.Trigger asChild>
              <Button size="$3" mt={10} bg={'#3F48CC'}>
                Sign in
              </Button>
            </Form.Trigger>

            <XStack alignItems="flex-end" space="$2" mt={30} mb={10} >
              <Link href="/sign-up" passHref>
                <span>Sign Up</span>
              </Link>
            </XStack>
          </YStack>
        </Form>
      </YStack>
    </>
  );
}
