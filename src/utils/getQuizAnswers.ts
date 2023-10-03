import api from "src/services/api"

export const getQuizAnswers = async (JWT: string, user_id: string) => {
  const response = await api.get("/flexible_forms/quizzes", {
    headers: {
      "Authorization": `Bearer ${JWT}`
    }
  })

  const quiz = JSON.parse(response.data.flexible_forms[response.data.flexible_forms.length - 1].flexible_form_version.data)

  const answers = quiz.questions.map((question: any) => {
    const ans = question.options.map((option: any) => {
      if (option.correct) {
        return {
          value: option.value,
        }
      } else {
        return null
      }
    }).filter((option: any) => option !== null)[0]

    return {
      field: question.field,
      value: ans.value
    }
  })

  const quiz_answer = {
    flexible_answer: {
      flexible_form_version_id: response.data.flexible_forms.length,
      data: JSON.stringify({
        percentage: 100,
        answers: [...answers]
      }),
      user_id: user_id
    }
  }

  await api.post("/flexible_answers", quiz_answer, {
    headers: {
      "Authorization": `Bearer ${JWT}`
    }
  })

  return answers
}