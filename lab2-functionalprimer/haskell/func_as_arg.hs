--create inpFunc
inpFunc a b = [a..b]

-- Define applicatorFunc
applicatorFunc inpFunc s a b 
    | s == 's'  = sum list
    | s == 'a'  = (sum list) / fromIntegral (length list)
    | otherwise = error "Invalid operation"
    where list = inpFunc a b

main = do
    let a = 1
    let b = 10
    let result = applicatorFunc inpFunc 'a' a b -- Call applicatorFunc with inpFunc, 'a', a, and b as args
    putStrLn ("sum/average = " ++ show result)