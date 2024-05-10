'use client';
import { Button, Input, Form, XStack, YStack, H2, Label, Spinner } from 'tamagui';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  console.log('🚀 ~ Signin ~ session:', session);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const toast = useToastController();

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (session) {
  //     router.push(`/dashboard`);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [session]);

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

  if (loading) {
    return (
      <YStack padding="$3" space="$4" alignItems="center">
        <Spinner size="large" color="$orange10" />
      </YStack>
    );
  } else {
    return (
      <>
        <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
          <H2>Sign in</H2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <YStack width={350} minHeight={450} overflow="hidden" space="$2" margin="$3" padding="$2">
              <Label htmlFor="email">Email Address</Label>
              <XStack alignItems="center" space="$2" mt={6} mb={10}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      size="$2"
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
              <XStack alignItems="center" space="$2" mt={6} mb={10}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      size="$2"
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
                <Button size="$2" mt={10}>
                  Submit
                </Button>
              </Form.Trigger>
            </YStack>
          </Form>
        </YStack>
  
        {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
         
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                  <div className="text-sm">
                    <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
                      Forgot password?
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
                  disabled={!email || !password}
                  className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </div>
  
            <p className="mt-10 text-center text-sm text-gray-400">
              Not a member?{' '}
              <button onClick={() => router.push('sign-up')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                Sign Up
              </button>
            </p>
          </div>
        </div> */}
      </>
    );
  }

}
