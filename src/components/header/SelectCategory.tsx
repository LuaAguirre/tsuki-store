import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface ChangeCategory {
  handleChangeCategory: (category: string) => void
}

export function SelectCategory({ handleChangeCategory }: ChangeCategory) {
  return (
    <Select onValueChange={handleChangeCategory}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a category' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value='all'>All</SelectItem>
          <SelectItem value='Clothess'>Clothess</SelectItem>
          <SelectItem value='Furniture'>Furniture</SelectItem>
          <SelectItem value='Miscellaneous'>Miscellaneous</SelectItem>
          <SelectItem value='Electronics'>Electronics</SelectItem>
          <SelectItem value='Shoes'>Shoes</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
