package com.revature.aspects;

import java.util.Arrays;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class BeansAspect {

	@Around("allBeans()")
	public Object around(ProceedingJoinPoint pjp) throws Throwable {
		Object obj = null;
		System.err.println("Around! Before Execution.");
		System.err.println(pjp.getSignature());
		System.err.println(Arrays.toString(pjp.getArgs()));
		try {
			obj = pjp.proceed();
		} catch (Throwable e) {
			e.printStackTrace();
			throw e;
		}
		if (obj instanceof String) {
			if ("Waste".equals((String) obj)) {
				return "Bleach";
			}
		}
		return obj;
	}

	@Pointcut("execution(* com.revature.beans.Character.*(..))")
	public void allBeans() {
	}
}
