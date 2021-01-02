from django import forms


class CommentForm(forms.Form):
    author = forms.CharField(
        max_length=60,
        widget=forms.TextInput(attrs={
            'class': 'text-red-500',
            'placeholder': 'Your Name'
        })
    )
    body = forms.CharField(widget=forms.Textarea(attrs={
        'class': 'bg-red-600',
        'placeholder': 'Leave a comment!'
        })
    )
