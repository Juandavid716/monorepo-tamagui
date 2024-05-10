'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Form, XStack, YStack, H2, Label, Text } from 'tamagui';
import { useToastController } from '@my/ui';

import { auth } from 'app/auth/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'app/shared/validation';

export default function SignUp() {
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
      await createUserWithEmailAndPassword(auth, email, password);

      toast.show('Successfully sign up');
      router.push('/sign-in');
    } catch (error) {
      console.error(error, 'error');
      toast.show('Something went wrong', error);
    }
  };

  return (
    <>
      <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
        <H2>Sign Up</H2>
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
            </XStack>
            {errors.email && <Text color="red">{errors.email.message}</Text>}
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
            </XStack>
            {errors.password && <Text color="red">{errors.password.message}</Text>}

            <Form.Trigger asChild>
              <Button size="$3" mt={10} bg={'#3F48CC'}>
                Sign up
              </Button>
            </Form.Trigger>
          </YStack>
        </Form>
      </YStack>
    </>
  );
}
