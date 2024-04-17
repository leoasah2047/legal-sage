import { Send } from 'lucide-react'
import { Button } from '../ui/button'
import {
  ChevronDown,
  ChevronUp,
  Loader2,
  RotateCw,
  Search,
} from 'lucide-react'
import { useContext, useRef } from 'react'
import { FlagContext } from './FlagContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface FlagInputProps {
  isDisabled?: boolean
}

const FlagInput = ({ isDisabled }: FlagInputProps) => {
  const {
    addFlag,
    isLoading,
    type,
    language,
    country
  } = useContext(FlagContext)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className='w-full'>
      <div className='mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
        <div className='relative flex h-full flex-1 items-stretch md:flex-col'>
          <div className='relative flex flex-col w-full flex-grow p-4'>
            <div className='relative'>
              {/*<DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className='gap-1.5'
                    aria-label='zoom'
                    variant='ghost'>
                    <ChevronDown className='h-3 w-3 opacity-50' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onSelect={() => setScale(1)}>
                    100%
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setScale(1.5)}>
                    150%
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setScale(2)}>
                    200%
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setScale(2.5)}>
                    250%
                  </DropdownMenuItem>
                </DropdownMenuContent>
  </DropdownMenu>*/}

              <Button
                disabled={isLoading || isDisabled}
                className='absolute bottom-1.5 right-[8px]'
                aria-label='send message'
                onClick={() => {
                  addFlag()
                }}>
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlagInput
