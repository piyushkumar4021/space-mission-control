import { Button, Input } from '@heroui/react';

const styles = {
  label: 'text-base mr-auto',
};

export default function LaunchForm() {
  return (
    <form className='mt-5 max-w-md'>
      <div className='space-y-2'>
        <Input
          classNames={styles}
          label='Launch Date'
          labelPlacement={'outside-left'}
          type='date'
        />
        <Input
          classNames={styles}
          label='Mission Name'
          labelPlacement={'outside-left'}
        />
        <Input
          classNames={styles}
          label='Rocket Type'
          labelPlacement={'outside-left'}
          type='text'
          value='Kepler'
        />
        <Input
          classNames={styles}
          label='Destination Planet'
          labelPlacement={'outside-left'}
        />
      </div>

      <Button color='primary' variant='flat' className='mt-4'>
        Launch Rocket
      </Button>
    </form>
  );
}
