import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export default function LaunchForm() {
  return (
    <form className='mt-5'>
      <div className='space-y-3 mb-5'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='launch_date'>Launch Date</Label>
          <Input type='date' id='launch_date' />
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='mission_name'>Mission Name</Label>
          <Input type='email' id='mission_name' placeholder='Mission Name' />
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='rocket_name'>Rocket Name</Label>
          <Input type='email' id='rocket_name' placeholder='Rocket Name' />
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='destination_planet'>Destination Planet</Label>
          <Select>
            <SelectTrigger id='destination_planet' className='w-full'>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button>Launch Rocket</Button>
    </form>
  );
}
